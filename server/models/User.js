const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  adress: String,
  role: {
    type: String,
    enum: ['Buyer', 'Seller'],
    default: 'Buyer'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;