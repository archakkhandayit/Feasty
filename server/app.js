// server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from 'cookie-parser'
// Load environment variables
dotenv.config();

const app = express();

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

// Basic route
app.get("/", (req, res) => {
  res.send("🚀 Express server is running!");
});

// MongoDB connection (optional — remove if not using MongoDB)
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  }
};

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  console.log(`🔥 Server running on http://localhost:${PORT}`);
  if (process.env.MONGO_URI) await connectDB();
});
