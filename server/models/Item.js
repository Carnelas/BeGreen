const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  itemname: String,
  class: { type: String, enum: ["fruits", "vegetables"] },
  price: String
});

const Item = mongoose.model('Item', itemSchema);
module.exports = Item;