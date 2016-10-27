var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
    orderId: String,
    total: Number,
    status: String,
    menuItems: [{
        itemName: String,
        itemPrice: Number,
        itemQuantity: Number
    }]
});

module.exports = mongoose.model('Order', orderSchema);