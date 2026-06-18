const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");

// Add to cart
router.post("/add", async (req, res) => {
  const cart = await Cart.create(req.body);
  res.json(cart);
});

// Get cart
router.get("/:userId", async (req, res) => {
  const cart = await Cart.findOne({ userId: req.params.userId });
  res.json(cart);
});

module.exports = router;