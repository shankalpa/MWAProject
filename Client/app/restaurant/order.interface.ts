export interface IOrder {
    orderId: string;
    total: Number,
    status: string;
    menuItems?: [{
        itemName: string;
        itemPrice: Number;
        itemQuantity: Number;
    }]
}