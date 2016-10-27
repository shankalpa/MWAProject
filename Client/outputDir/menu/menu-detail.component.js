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
var restaurant_1 = require('../restaurant/restaurant');
var menu_service_1 = require('./menu.service');
var MenuDetailComponent = (function () {
    //value1 = 0;
    function MenuDetailComponent(menuservice, route) {
        this.menuservice = menuservice;
        this.route = route;
        this.restaurant = new restaurant_1.Restaurant();
        //private restaurantMenu : Restaurant;
        this.pricelist = [{ val: 0 }, { val: 1 }, { val: 2 }, { val: 3 }, { val: 4 }, { val: 5 }, { val: 6 }, { val: 7 }, { val: 8 }, { val: 9 },];
        this.selectedOption = this.pricelist[0];
        this.totalPrice = 0;
    }
    MenuDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = params['id'];
            _this.getOrderById(id);
        });
    };
    MenuDetailComponent.prototype.getOrderById = function (id) {
        var _this = this;
        console.log("id inside get menu by id " + id);
        this.menuservice.getMenuById(id)
            .subscribe(function (data) {
            console.log(data);
            _this.restaurant = data;
        }, function (error) { return console.log(error); }, function () { return console.log('Get Order Detail Complete'); });
        console.log(this.restaurant);
        console.dir(this.restaurant);
    };
    MenuDetailComponent.prototype.onChange = function (newValue) {
        console.log(newValue);
        this.selectedOption = newValue;
        this.calculateTotal(Number(this.selectedOption));
    };
    MenuDetailComponent.prototype.calculateTotal = function (price) {
        return (+this.totalPrice + +this.selectedOption);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', restaurant_1.Restaurant)
    ], MenuDetailComponent.prototype, "restaurant", void 0);
    MenuDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-menu-detail',
            templateUrl: '/app/menu/menu-detail.component.html',
            providers: [menu_service_1.MenuService]
        }), 
        __metadata('design:paramtypes', [menu_service_1.MenuService, router_1.ActivatedRoute])
    ], MenuDetailComponent);
    return MenuDetailComponent;
}());
exports.MenuDetailComponent = MenuDetailComponent;
//# sourceMappingURL=menu-detail.component.js.map