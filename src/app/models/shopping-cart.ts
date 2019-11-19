 import { ShoppingCartItem } from "./shopping-cart-item";

export class ShoppingCart {

    items: ShoppingCartItem[]=[];

 constructor(public itemsMap: {[productId: string]: ShoppingCartItem}) {

 for(let productId in itemsMap)
 this.items.push(itemsMap[productId]);

 }

     }
