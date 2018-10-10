const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    buyer: String,
    seller: {
        type: String,
        enum: [String]
    },
    items: Array,
    orderNumber: String
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;