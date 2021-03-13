const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const sensorCounter = new mongoose.Schema(
  {
    steps: {
        type: Number,
        trim: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("sensorCounter", sensorCounter);
