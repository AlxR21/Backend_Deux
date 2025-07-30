import express from 'express'
import Book from '../models/book.models.js'

const router = express.Router();

router.post('/', async (req, res) => {
    try{
        console.log("Incoming data", req.body)
        const {title, author, publishedYear, genre} = req.body;
        const book = new Book({
            title, 
            author, 
            publishedYear, 
            genre
        });
        console.log("Book Before save: ", book)
        const saved = await book.save();
        res.status(201).json(saved);
    }
    catch (err){
        console.error("Error in post", err);
        res.status(500).json({
            message: "Server Error"
        })
    }
});

router.get('/', async (req, res) => {
    try{
        const books = await Book.find();
    res.json(books);
    }
    catch(error){
        res.status(500).json({
            message: error.message,
        })
    }
});

router.put('/books/:id', async (req, res) => {
    try{
        const updated = await Book.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.json(updated);
    }
    catch (err) {
        res.status(400).json({error: 'Update Failed'});
    }
});

router.delete('/books/:id', async(req, res) => {
    try{
        await Book.findByIdAndDelete(req.params.id);
        res.send("Book Deleted");
    }
    catch (err) {
        res.status(400).json({
            error: 'Delete Failed',
        })
    }
})

export default router;