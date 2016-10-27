import { Injectable } from '@angular/core';

import {Restaurant} from './restaurant/restaurant'
import {RESTAURANTS} from './restaurant/mock-restaurants';
@Injectable()
export class RestaurantService {

getRestaurants(): Restaurant[]{
    return RESTAURANTS;
}

}
