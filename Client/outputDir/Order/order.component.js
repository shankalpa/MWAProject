"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var order_service_1 = require('./order.service');
var router_1 = require('@angular/router');
var OrderComponent = (function () {
    function OrderComponent(router, orderService) {
        this.router = router;
        this.orderService = orderService;
        this.title = "Order Detail";
        this.orders = [];
    }
    OrderComponent.prototype.ngOnInit = function () {
        this.getOrders();
    };
    OrderComponent.prototype.getOrders = function () {
        var _this = this;
        //this.orders = this.orderService.getOrders();
        this.orderService.getOrders()
            .subscribe(function (data) { return _this.orders = data; }, function (error) { return console.log(error); }, function () { return console.log('Get Order Complete'); });
    };
    OrderComponent.prototype.gotoDetail = function (order) {
        var link = ['/order/detail', order._id];
        this.router.navigate(link);
    };
    OrderComponent = __decorate([
        core_1.Component({
            selector: 'order',
            templateUrl: './app/order/order.component.html',
            providers: [order_service_1.OrderService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, order_service_1.OrderService])
    ], OrderComponent);
    return OrderComponent;
}());
exports.OrderComponent = OrderComponent;
//# sourceMappingURL=order.component.js.map