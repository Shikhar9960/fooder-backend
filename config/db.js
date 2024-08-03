import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://shikharjais5:aashi9960@cluster0.nplzzqi.mongodb.net/food-del').then(()=>console.log("db connected"));
}