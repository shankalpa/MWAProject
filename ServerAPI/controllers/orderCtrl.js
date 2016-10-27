var mongoose = require('mongoose');
var Order = require('../model/order');


module.exports.getAllOrders = function (req, res) {
    Order.find({}, function (err, data) {
        if (err) {
            return console.error(err);
        } else {
            res.send(data);
        }
    })
};

//Search order by Id
module.exports.getOrderById = function (req, res) {
    var id = req.params.id
    Order.findOne({ _id: mongoose.Types.ObjectId(id) }, function (err, data) {
        if (err) {
            return console.error(err);
        } else {
            res.send(data);
        }
    })
};

//Search order by status
module.exports.getOrdersByStatus = function (req, res) {
    var status = req.params.status
    Order.find({ status: new RegExp(status, 'i') }, function (err, data) {
        if (err) {
            return console.error(err);
        } else {
            res.send(data);
        }
    })
};

//create new order
module.exports.createOrder = function (req, res) {
    var order = new Order(req.body);
    order.save(function (err, order) {
        if (err) {
            return console.error(err);
        } else {
            res.json(order);
        }
    });
};

module.exports.removeOrder = function (req, res) {
    var id = req.params.id;
    Order.remove({ orderId: id }, function (err, data) {
        if (err) {
            return console.error(err);
        } else {
            res.send('Order removed!');
        }
    });
};
