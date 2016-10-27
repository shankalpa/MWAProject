﻿var mongoose = require('mongoose');

var restaurantSchema = new mongoose.Schema({
    name: String,
    address: String,
    zip: String,
    phone: String,
    menuItems: [{
        itemName: String,
        itemPrice: Number
    }]
});

module.exports = mongoose.model('Restaurant', restaurantSchema);

