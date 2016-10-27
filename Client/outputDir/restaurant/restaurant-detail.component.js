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
var restaurant_service_1 = require('./restaurant.service');
var RestaurantDetailComponent = (function () {
    function RestaurantDetailComponent(restaurantservice, router) {
        this.restaurantservice = restaurantservice;
        this.router = router;
        this.ddlist = ["ZIP", "Place"];
        this.selectedOption = this.ddlist[0];
        this.inputvalue = '';
    }
    //onerestaurant : Restaurant;
    RestaurantDetailComponent.prototype.ngOnInit = function () {
    };
    RestaurantDetailComponent.prototype.getRestaurants = function (name, ZIP) {
        //this.restaurant = this.restaurantservice.getRestaurantsByName();
        //console.log(this.restaurant)
    };
    RestaurantDetailComponent.prototype.onChange = function (newValue) {
        console.log(newValue);
        this.selectedOption = newValue;
    };
    RestaurantDetailComponent.prototype.getRestaurantsByName = function (name) {
        var _this = this;
        console.log("what is selected " + this.selectedOption);
        this.restaurant = [];
        this.restaurantservice.getRestaurantsByName(name)
            .subscribe(function (data) { return _this.restaurant = data; }, function (error) { return console.log(error); }, function () { return console.log('Get restaurant Complete'); });
    };
    RestaurantDetailComponent.prototype.takeToMenu = function (id) {
        console.log(id);
        var link = ['/menudetail', id];
        this.router.navigate(link);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], RestaurantDetailComponent.prototype, "restaurant", void 0);
    RestaurantDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-restaurant-detail',
            templateUrl: '/app/restaurant/restaurant-detail.html',
            providers: [restaurant_service_1.RestaurantService],
        }), 
        __metadata('design:paramtypes', [restaurant_service_1.RestaurantService, router_1.Router])
    ], RestaurantDetailComponent);
    return RestaurantDetailComponent;
}());
exports.RestaurantDetailComponent = RestaurantDetailComponent;
//# sourceMappingURL=restaurant-detail.component.js.map