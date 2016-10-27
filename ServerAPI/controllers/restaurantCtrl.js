var Restaurant = require('../model/restaurant');

module.exports.allRestaurants = function (req, res) {
    Restaurant.find({}, function (err, data) {
        if (err) {
            return console.error(err);
        } else {
            res.send(data);
        }
    })
};

module.exports.getById = function (req, res) {
    var id = req.params.id;
    Restaurant.findOne({_id: id}, function (err, data) {
        if (err) {
            return console.error(err);
        } else {
            res.send(data);
        }
    })
};

module.exports.getMenuByName = function (req, res) {
    var name = req.params.name
    Restaurant.find({ name: new RegExp(name, 'i') }, { menuItems: 1 }, function (err, data) {
        if (err) {
            return console.error(err);
        } else {
            res.send(data);
        }
    })
};

module.exports.getRestaurantByName = function (req, res) {
    var name = req.params.name
    Restaurant.find({ name: new RegExp(name, 'i') }, function (err, data) {
        if (err) {
            return console.error(err);
        } else {
            res.send(data);
        }
    })
};

module.exports.getRestaurantByZip = function (req, res) {
    var zip = req.params.name
    Restaurant.find({ zip: new RegExp(zip, 'i') }, function (err, data) {
        if (err) {
            return console.error(err);
        } else {
            res.send(data);
        }
    })
};

module.exports.addRestarant = function (req, res, next) {
    var restaurant = new Restaurant(req.body);
    restaurant.save(function (err, post) {
        if (err) { return next(err); }
        res.json(post);
    });
};