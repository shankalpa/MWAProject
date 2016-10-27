import { Component } from '@angular/core';

import {RestaurantService} from './restaurant.service'

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html'
})
export class AppComponent { 
  message = "";
  //constructor(private restaurantservice : RestaurantService){}
}
