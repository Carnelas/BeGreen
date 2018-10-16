const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    name: String,
    phone: String,
    description: String,
    adress: String,
    owner: String
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
module.exports = Restaurant;