import { Injectable }     from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import {Restaurant} from './restaurant'

@Injectable()
export class RestaurantService {

    

    private actionUrl: string = 'http://localhost:1337/';

    constructor(private http: Http) { }

    getRestaurantsByName(name: string): Observable<Restaurant[]>{
             return this.http.get(this.actionUrl + 'name/' + name)
            .map((r: Response) => <Restaurant[]>r.json())
            .catch(this.handleError);
    }

    // getOrders(): Observable<Order[]> {
    //     return this.http.get(this.actionUrl)
    //         .map((r: Response) => <Order[]>r.json());
    // }

    getRestaurantById(id: string) {
        return this.http.get(this.actionUrl + '/id/' + id)
            .map((r: Response) => <Restaurant>r.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'server error');
    }


}
