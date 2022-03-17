const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: "string",
    require: [true, "must fill the name"]
  },
  price: {
    type: "number",
    require: [true, "must fill the price"]
  },
  stock: {
    type: "number",
    require: [true, "must fill the stock"]
  },
  available: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
});

module.exports = mongoose.model("product", productSchema);
