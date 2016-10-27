var express = require('express');
var router = express.Router();
var controllers = require('../controllers/restaurantCtrl');

router.get('/', controllers.allRestaurants);
router.get('/menu/:name', controllers.getMenuByName);
router.get('/name/:name', controllers.getRestaurantByName);
router.get('/zip/:zip', controllers.getRestaurantByZip);
router.get('/id/:id', controllers.getById);
router.post('/', controllers.addRestarant);

module.exports = router;

