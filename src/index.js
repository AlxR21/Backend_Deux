import express from 'express';
import dotenv from 'dotenv'

dotenv.config();

// console.log("Hey!");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

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



app.listen(PORT, () => {
    console.log("Server is running on: " + PORT);
})