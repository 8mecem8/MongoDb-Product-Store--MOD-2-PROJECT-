const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  category:{type:String,required: true},
  name: {type: String, required: true, unique: true},
  description: {type: String, required: true},
  imageURL: {type: String, required: true},
  price: {type: Number, default: 1.00},
  amount: {type: Number, default: 1},
  inStock: {type: Boolean, default: false}
});

const product = mongoose.model("products", productsSchema);

module.exports = product;