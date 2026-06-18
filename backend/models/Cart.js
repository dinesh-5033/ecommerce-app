const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: String,
  products: Array,
});

module.exports = mongoose.model("Cart", cartSchema);