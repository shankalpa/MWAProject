import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


import { Restaurant } from '../restaurant/restaurant';



@Injectable()
export class MenuService {

    private actionUrl: string = 'http://localhost:1337/';
    constructor(private http: Http) { }

    ngOnInit(): void {
    }
    // getMenuById(id : string): Restaurant{
    //     console.log("id in service menu method " + id);
    //    //let idNumber =  Number(id) - 1; 
    //     console.log("inside menu service id Number value : " + id)
    //     return RESTAURANTS[idNumber];
    // }

    getMenuById(id: string) {
        return this.http.get(this.actionUrl + 'id/' + id)
            .map((r: Response) => <Restaurant>r.json())
            .catch(this.handleError);
    }

     private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'server error');
    }
}