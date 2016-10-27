import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { RestaurantDetailComponent} from './restaurant/restaurant-detail.component';
import { OrderDetailComponent } from './order/order-detail.component';
import {MenuDetailComponent}from './menu/menu-detail.component';

const routes: Routes = [
    { path: '', redirectTo: '/restaurant', pathMatch: 'full' },
    { path: 'order', component: OrderComponent },
    { path: 'order/detail/:orderId', component: OrderDetailComponent },
    { path: 'restaurant', component: RestaurantDetailComponent },
    { path: 'menudetail/:id', component: MenuDetailComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
