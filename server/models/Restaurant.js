const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    name: String,
    email: String,
    password: String,
    adress: String,
    owner: String
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
module.exports = Restaurant;