import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router'

import { Restaurant } from './restaurant';
import { RestaurantService } from './restaurant.service';

@Component({
    selector: 'my-restaurant-detail',
    templateUrl: '/app/restaurant/restaurant-detail.html',
    providers: [RestaurantService],
})
export class RestaurantDetailComponent implements OnInit {
    ddlist = ["ZIP", "Place"];
    selectedOption = this.ddlist[0];
    inputvalue = '';

    //target property has to be input property
    @Input()
    restaurant: Restaurant[];
    //onerestaurant : Restaurant;

    ngOnInit(): void {
    }

    constructor(private restaurantservice: RestaurantService, 
        private router: Router ) { }

    getRestaurants(name: string, ZIP: string) {
        //this.restaurant = this.restaurantservice.getRestaurantsByName();
        //console.log(this.restaurant)
        
    }
    onChange(newValue) {
    console.log(newValue);
    this.selectedOption = newValue;
    }

      getRestaurantsByName(name: string): void {
          console.log("what is selected " + this.selectedOption);
          this.restaurant=[];
        this.restaurantservice.getRestaurantsByName(name)
            .subscribe((data: Restaurant[]) => this.restaurant = data,
            error => console.log(error),
            () => console.log('Get restaurant Complete'));
    }

    takeToMenu(id: string) {
        console.log(id);
        let link = ['/menudetail', id];
        this.router.navigate(link);

    }
}
