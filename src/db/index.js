
import mongoose from "mongoose";

export const connectDB = () => {
    try {
       mongoose.connect(process.env.MONGO_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
       });
 
       const connection = mongoose.connection;
       connection.once("open", () => {
          console.log("Connected to MongoDB");
       });
       connection.on("error", (error) => {
          console.error("MongoDB connection error:", error);
       });
    } catch (error) {
       throw new Error("Something went wrong on the server", error);
    }
 };