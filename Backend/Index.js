import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// These two lines fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Load .env from the root folder
dotenv.config({ path: path.resolve(__dirname, "../.env") });

import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

// Your existing imports
import { HoldingsModel } from "./model/HoldingsModel.js";
import { PositionsModel } from "./model/PositionsModel.js";
import OrdersModel from "./model/OrdersModel.js";

// Now safely access your env variables
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();
app.use(cors({ origin: "https://zerodhaclone-10ae.onrender.com", methods: ["GET", "POST"] }));

app.use(bodyParser.json());

// Frontend build serve
app.use(express.static(path.join(__dirname, "../frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

// API Routes
app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    res.status(500).send("Error fetching holdings: " + err.message);
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    res.status(500).send("Error fetching positions: " + err.message);
  }
});

app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    if (!name || !qty || !price || !mode) {
      return res.status(400).send("Missing fields");
    }
    const newOrder = new OrdersModel({ name, qty, price, mode });
    await newOrder.save();
    res.send("Order saved!");
  } catch (err) {
    res.status(500).send("Error saving order: " + err.message);
  }
});

app.get("/allOrders", async (req, res) => {
  try {
    const allOrders = await OrdersModel.find({});
    res.json(allOrders);
  } catch (err) {
    res.status(500).send("Error fetching orders: " + err.message);
  }
});

// Connect Mongo and Start Server
mongoose
  .connect(uri)
  .then(() => {
    console.log("DB connected");
    app.listen(PORT, () => {
      console.log("App started on port", PORT);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
  });
