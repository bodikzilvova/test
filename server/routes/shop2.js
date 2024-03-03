const express = require("express");
const router = express.Router();
const { Product2 } = require("../models/product");

router.get("/", async (req, res, next) => {
  try {
    const products = await Product2.find();
    res.json(products);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
