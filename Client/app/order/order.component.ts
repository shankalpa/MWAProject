import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';
import { Router } from '@angular/router';
import { Order } from './order';

@Component({
    selector: 'order',
    templateUrl: './app/order/order.component.html',
    providers: [OrderService]
})
export class OrderComponent implements OnInit {
    title: String = "Order Detail";
    orders: Order[] = [];

    constructor(private router: Router, private orderService: OrderService) { }

    ngOnInit(): void {
        this.getOrders();
    }

    getOrders(): void {
        //this.orders = this.orderService.getOrders();
        this.orderService.getOrders()
            .subscribe((data: Order[]) => this.orders = data,
            error => console.log(error),
            () => console.log('Get Order Complete'));
    }

    gotoDetail(order: Order): void {
        let link = ['/order/detail', order._id];
        this.router.navigate(link);
    }
}