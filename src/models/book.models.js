import mongoose, { Mongoose } from "mongoose";

const bookSchema = new Mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    publishedYear: {
        type: Date
    },
    genre: {
        type: String
    }
}, {
    timeStamps: true,
})

export const Book = mongoose.model("Book", bookSchema)