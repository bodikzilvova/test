const express = require("express");
const router = express.Router();
const Order = require("../models/orders");

router.post("/place-order", async (req, res, next) => {
  try {
    const { name, email, phone, address, cartItems, totalPrice } = req.body;

    const newOrder = new Order({
      name,
      email,
      phone,
      address,
      cartItems,
      totalPrice,
    });
    await newOrder.save();
    res.status(201).json({ message: "Order placed successfully" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
