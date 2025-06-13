const mongoose = require("mongoose");
const { PositionsSchema } = require("../schemas/PositionsSchema"); // ✅ Note spelling correction

const PositionsModel = mongoose.model("position", PositionsSchema); 

module.exports = PositionsModel; // ✅ This line is correct
