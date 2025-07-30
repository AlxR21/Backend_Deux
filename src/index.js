import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import { DB_Name } from './constants.js';
import  Book  from './models/book.models.js';
import connectDB from './db/index.js';
import bookRoutes from './routes/books.routes.js'

dotenv.config({
});

// console.log("Hey!");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

//We can write Connection function in the index.js but that makes the codebase bloated hence we export the required functions from other files e.g connectDB() from db/index.js we'll do the same for Routes
// ( async () => {
//     try{
//          const mongoInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
//         console.log("Connected with MongoDB. Database Hosted: " + mongoInstance.connection.host)
//         app.on("error", (error) => {
//             console.log("Error: ", error);
//             throw error;
//         })

//         app.listen(PORT, () => {
//     console.log("Server is running on: " + PORT);
// })
//     } catch(error){
//         console.error("ERROR: ", error)
//         throw error;
//     }
// })()

connectDB()
.then(() => {
    console.log("MongoDB Connected.")
})
.catch(err => console.error("MongoDB connection failed."))
app.listen(PORT, () => {
    console.log("Server is running on: " + PORT);
})

app.use('/books', bookRoutes);

app.get('/', (req, res) => {
    console.log("hey!");
    res.send('Hello from the server.');
});

app.post('/users', (req, res) => {
    const user = req.body;
    res.send(`POST: User ${user.name} added.`);
});

app.put('/users/:id', (req, res) => {
    const {id} = req.params;
    const updatedUser = req.body;
    res.send(`PUT: User ${user} updated.`);
})

app.delete('/users/:id', (req, res) => {
    const {id} = req.params;
    res.send(`DELETE: User ${id} removed`);
})

