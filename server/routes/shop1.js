const express = require("express");
const router = express.Router();
const { Product1 } = require("../models/product");

router.get("/", async (req, res, next) => {
  try {
    const products = await Product1.find();
    res.json(products);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
