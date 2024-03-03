const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
});

const Product1 = mongoose.model("apotheke_store", productSchema);
const Product2 = mongoose.model("drugs_store", productSchema);
const Product3 = mongoose.model("pharmacy_store", productSchema);

module.exports = {
  Product1,
  Product2,
  Product3
};
