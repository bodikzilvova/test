const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  cartItems: [String],
  totalPrice: Number,
});

module.exports = mongoose.model('orders', orderSchema);