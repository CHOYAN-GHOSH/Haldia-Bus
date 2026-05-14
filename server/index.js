import Bus from "./models/Bus.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Database Connection
const mongoURI = process.env.MONGO_URI;

mongoose
  .connect(mongoURI)
  .then(() => console.log("✅ MongoDB Connected Successfully!"))
  .catch((err) => console.log("❌ DB Connection Error:", err));

// server/index.js file-e eta update koro
app.get("/api/buses", async (req, res) => {
  console.log("Request received for /api/buses"); // Terminal-e eta asche kina dekho
  try {
    const buses = await Bus.find();
    console.log("Buses found in DB:", buses.length);
    res.json(buses);
  } catch (error) {
    console.error("DB Fetch Error:", error.message);
    res.status(500).json({ error: error.message });
  }
});
app.post("/api/add-bus", async (req, res) => {
  try {
    const newBus = new Bus(req.body);
    await newBus.save();
    res.status(201).json({ message: "Bus added successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ২. Shob bus khunje paoyar API (GET request)
app.get("/api/buses", async (req, res) => {
  try {
    const buses = await Bus.find();
    res.json(buses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
