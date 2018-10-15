const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  role: {
    type: String,
    enum: ['buyer', 'seller'],
    default: 'buyer'
  },
  profileImage: String
});

const User = mongoose.model('User', userSchema);
module.exports = User;