import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RestaurantDetailComponent } from './restaurant/restaurant-detail.component';
import { RestaurantService } from './restaurant.service';
import { OrderComponent } from './order/order.component';
import { AppRoutingModule} from './app-routing.module';
import { OrderDetailComponent } from './order/order-detail.component';
import './rxjs-extensions';
import {MenuDetailComponent}from './menu/menu-detail.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        RestaurantDetailComponent,
        OrderComponent,
        OrderDetailComponent,
        MenuDetailComponent
    ],
    providers: [RestaurantService],
    bootstrap: [AppComponent],
})

export class AppModule { }
