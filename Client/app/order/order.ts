import { OrderItem } from './orderItem';

export class Order {
    _id: String;
    orderId: String;
    total: Number;
    status: String;
    menuItems: [{
            itemName: String;
            itemPrice: Number;
            itemQuantity: Number;
        }]
}
