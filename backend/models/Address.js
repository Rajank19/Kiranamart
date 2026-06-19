const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    label: {
      type: String,
      default: "Home",
    },

    fullAddress: {
      type: String,
      required: true,
    },

    city: String,
    state: String,
    pincode: String,

    latitude: Number,
    longitude: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Address",
  addressSchema
);