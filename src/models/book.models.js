import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: String,
    author: {
        type: String,
        required: true,
    },
    publishedYear: {
        type: Number
    },
    genre: {
        type: String
    }
})
const Book = mongoose.model('Book', bookSchema);

export default Book;
