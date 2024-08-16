import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionUri = `${process.env.MONGODB_URI}/${DB_NAME}`;

        const connectionInstance = await mongoose.connect(connectionUri,  {
           
        });

        console.log(`\nMongoDB connected!! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED", error);
        process.exit(1);
    }
};

export default connectDB;
