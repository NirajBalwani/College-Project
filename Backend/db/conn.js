import mongoose from "mongoose";

const connectToMongoDB = () => {
    mongoose.set('strictQuery', true);
    mongoose.connect("mongodb://localhost:27017/packandgo", { useNewUrlParser: true, useUnifiedTopology: true }, () => {
        console.log("MongoDB connected");
    })
}

export default connectToMongoDB

