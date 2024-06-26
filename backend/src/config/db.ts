import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log(process.env.MONGO_URI)
    const conn = await mongoose.connect(process.env.MONGO_URI as string, {});
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("DB connection failed");
    process.exit(1);
  }
};
