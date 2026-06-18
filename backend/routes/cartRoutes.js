const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");

// ADD TO CART (FIXED)
router.post("/add", async (req, res) => {
  try {
    const { userId, product } = req.body;

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = await Cart.create({
        userId,
        items: [product],
      });
    } else {
      cart.items.push(product);
      await cart.save();
    }

    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET CART
router.get("/:userId", async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;