const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  phone: Number,
  role: {
    type: String,
    enum: ['buyer', 'seller'],
    default: 'buyer'
  },
  profileImage: String,
  adress: String
});

const User = mongoose.model('User', userSchema);
module.exports = User;