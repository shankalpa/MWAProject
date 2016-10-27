var express = require('express');
var router = express.Router();
var controllers = require('../controllers/orderCtrl');


router.get('/', controllers.getAllOrders)
    .post('/', controllers.createOrder);

router.route('/orderId/:id')
    .get(controllers.getOrderById)
    .delete(controllers.removeOrder);

router.get('/status/:status', controllers.getOrdersByStatus);

module.exports = router;

