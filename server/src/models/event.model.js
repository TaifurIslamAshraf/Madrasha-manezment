const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter title"],
    },
    description: {
      type: String,
      required: [true, "Please enter description"],
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Event", eventSchema);
