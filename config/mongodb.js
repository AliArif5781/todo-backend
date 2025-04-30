import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const db_uri = process.env.MONGODB_URI;
    await mongoose.connect(db_uri);
    console.log("mongodb connected successfully");
  } catch (error) {
    console.log("mongodb connection error");
  }
};
