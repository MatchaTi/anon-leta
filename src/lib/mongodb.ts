import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error(
        "MONGODB_URI environment variable is not defined in .env"
      );
    }
    await mongoose.connect(uri);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("Failed to connect to MongoDB");
  }
};

export default connectMongoDB;
