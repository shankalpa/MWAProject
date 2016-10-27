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
var router_1 = require('@angular/router');
var order_1 = require('./order');
var order_service_1 = require('./order.service');
var OrderDetailComponent = (function () {
    function OrderDetailComponent(route, orderService) {
        this.route = route;
        this.orderService = orderService;
        this.title = "Order Details";
        this.order = new order_1.Order;
    }
    OrderDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = params['orderId'];
            _this.getOrderById(id);
        });
    };
    OrderDetailComponent.prototype.getOrderById = function (id) {
        var _this = this;
        this.orderService.getOrdersById(id)
            .subscribe(function (data) {
            _this.order = data;
        }, function (error) { return console.log(error); }, function () { return console.log('Get Order Detail Complete'); });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', order_1.Order)
    ], OrderDetailComponent.prototype, "order", void 0);
    OrderDetailComponent = __decorate([
        core_1.Component({
            //moduleId: module.id,
            selector: 'order-detail',
            templateUrl: './app/order/order-detail.component.html',
            providers: [order_service_1.OrderService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, order_service_1.OrderService])
    ], OrderDetailComponent);
    return OrderDetailComponent;
}());
exports.OrderDetailComponent = OrderDetailComponent;
//# sourceMappingURL=order-detail.component.js.map