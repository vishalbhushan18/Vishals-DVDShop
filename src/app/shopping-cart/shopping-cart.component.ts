import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { ShoppingCartItem } from "./../models/shopping-cart-item";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  shoppingCartItemCount : number;  
  cart$;
  items: ShoppingCartItem[]=[];

  constructor(private shoppingCartService: ShoppingCartService) {}
   
get productIds() {
  return Object.keys(this.items);
}

async ngOnInit() {
  this.cart$ = await this.shoppingCartService.getCart();  
  this.cart$.subscribe(cart => {  
  this.shoppingCartItemCount=0;  
  for(let productId in cart.items)
  this.shoppingCartItemCount += cart.items[productId].quantity;  
  });    
  }
}
