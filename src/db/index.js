import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

const connectDB = async () => {
    try{

        const mongoInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
        console.log("Connected with MongoDB. Database Hosted: " + mongoInstance.connection.host)

    } catch (error){

        console.log("MONGODB not connected", error);
        process.exit(1);

    }
}

export default connectDB;