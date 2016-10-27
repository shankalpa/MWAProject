import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {Restaurant} from  '../restaurant/restaurant';
import {SimpleCalculatorPipe} from './calculatePrice.pipe';

import { MenuService } from './menu.service';

@Component({
    selector: 'my-menu-detail',
    templateUrl: '/app/menu/menu-detail.component.html',
    providers : [MenuService]
})

export class MenuDetailComponent implements OnInit {

@Input()
restaurant : Restaurant = new Restaurant();
 //private restaurantMenu : Restaurant;
pricelist = [{val : 0},{val : 1},{val : 2},{val : 3},{val : 4},{val : 5},{val : 6},{val : 7},{val : 8},{val : 9},];
    selectedOption = this.pricelist[0];
    totalPrice = 0;
 //value1 = 0;
    constructor(private menuservice: MenuService, 
                private route: ActivatedRoute
                ) { }
    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = params['id'];
            this.getOrderById(id);
        })
    }

     getOrderById(id: string): void {
         console.log("id inside get menu by id " + id);
        this.menuservice.getMenuById(id)
            .subscribe((data: Restaurant) => {
                console.log(data);
                this.restaurant = data
            },
            error => console.log(error),
            () => console.log('Get Order Detail Complete'));

            console.log(this.restaurant);
            console.dir(this.restaurant);
    }

    onChange(newValue) {
    console.log(newValue);
    this.selectedOption = newValue;
    this.calculateTotal(Number(this.selectedOption));
    }

    calculateTotal (price : number) : number{
        return (+this.totalPrice + +this.selectedOption) 
    }
}