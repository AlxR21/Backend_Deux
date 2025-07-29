import mongoose, { Mongoose } from "mongoose";
import { use } from "react";

const userSchema = new Mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    age: {
        type: Number
    },
    books: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book"
    }]
}, {
    timeStamps: true,
});

export const User = mongoose.model('User', userSchema)