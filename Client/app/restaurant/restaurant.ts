export class Restaurant {
  _id: string;
  zip: number;
  name: string;
  phone: string;
  address: string;
   menuItems: [{
        itemName: String,
        itemPrice: Number,
        itemQuantity: Number
    }]
}
