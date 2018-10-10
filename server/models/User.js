const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  adress: String,
  role: {
    type: String,
    enum: ['User', 'Seller'],
    default: 'User'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;