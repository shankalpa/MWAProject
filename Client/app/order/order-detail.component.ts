import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Order } from './order';
import { OrderService } from './order.service';
import { Observable } from 'rxjs/Observable';

@Component({
    //moduleId: module.id,
    selector: 'order-detail',
    templateUrl: './app/order/order-detail.component.html',
    providers: [OrderService]
})
export class OrderDetailComponent implements OnInit {
    title = "Order Details";
    @Input()
    order: Order = new Order;

    constructor(private route: ActivatedRoute, private orderService: OrderService) {
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = params['orderId'];
            this.getOrderById(id);
        });
    }

    getOrderById(id: string): void {
        this.orderService.getOrdersById(id)
            .subscribe((data: Order) => {
                this.order = data
            },
            error => console.log(error),
            () => console.log('Get Order Detail Complete'));
    }
}