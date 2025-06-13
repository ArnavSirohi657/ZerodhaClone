require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const OrdersModel = require("./model/OrdersModel");


const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors({
  origin: "http://localhost:3000", // adjust if frontend is on a different domain
  methods: ["GET", "POST"]
}));
app.use(bodyParser.json());

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

    console.log("Received order:", { name, qty, price, mode });

    if (!name || !qty || !price || !mode) {
      console.log("Missing fields");
      return res.status(400).send("Missing fields in request body");
    }

    const newOrder = new OrdersModel({ name, qty, price, mode });
    await newOrder.save();

    console.log("Order saved:", newOrder);
    res.send("Order saved!");
  } catch (err) {
    console.error("Failed to save order:", err.message);
    res.status(500).send("Error saving order: " + err.message);
  }
});

app.get("/allOrders", async (req, res) => {
  try {
    const allOrders = await OrdersModel.find({});
    res.json(allOrders);
  } catch (err) {
    console.error("Error fetching orders:", err.message);
    res.status(500).send("Error fetching orders: " + err.message);
  }
});



// Connect to MongoDB before starting the server
mongoose.connect(uri)
  .then(() => {
    console.log("DB connected");
    app.listen(PORT, () => {
      console.log("App started on port", PORT);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
  });
