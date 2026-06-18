const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
router.post("/create", async (req, res) => {
  const order = await Order.create(req.body);
  res.json(order);
});
router.get("/", async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});
router.put("/update/:id", async (req, res) => {
  const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.json(order);
});
module.exports = router;
