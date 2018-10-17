const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  itemName: String,
  sellerId: {type:Schema.Types.ObjectId, ref:"User"},
  sellerName: String,
  price: String,
  qty: Number,
  image: String
});

const Item = mongoose.model('Item', itemSchema);
module.exports = Item;