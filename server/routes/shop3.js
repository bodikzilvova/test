const express = require("express");
const router = express.Router();
const { Product3 } = require("../models/product");

router.get("/", async (req, res, next) => {
  try {
    const products = await Product3.find();
    res.json(products);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
