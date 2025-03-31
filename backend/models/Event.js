const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    topic: { type: String, required: true },
    password: { type: String, required: true },
    host: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    ampm: { type: String, enum: ["AM", "PM"], required: true },
    duration: { type: String, required: true },
    URL: { type: String },
    Email: { type: String },
    timezone: { type: String, required: true },
    status: { type: String, enum: ["upcoming", "pending", "canceled"], default: "upcoming" },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Event", eventSchema);
