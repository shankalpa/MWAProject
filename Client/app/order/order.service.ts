import { Injectable }     from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Order }           from './order';

@Injectable()
export class OrderService {
    private actionUrl: string = 'http://localhost:1337/order';

    constructor(private http: Http) { }

    getOrders(): Observable<Order[]> {
        return this.http.get(this.actionUrl)
            .map((r: Response) => <Order[]>r.json());
    }

    getOrdersById(orderId: string) {
        return this.http.get(this.actionUrl + '/orderid/' + orderId)
            .map((r: Response) => <Order>r.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'server error');
    }
}

