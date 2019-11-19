import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public recentMovie="";
  
 public movieList = ["Product1","Product2",
 "Product3","Product4","Product5"];
 
 public cart:any[];
 movie:any;
 selectedMovie(movie)
 { 
  if (JSON.parse(localStorage.getItem(String(this.cart))) != null){
     this.cart= JSON.parse(localStorage.getItem(String(this.cart)));
   
}else{
   this.cart=[];
}
 this.cart.push(movie);
 
   alert(movie + " was added");

   localStorage.cartItems = JSON.stringify(this.cart);
 }
  constructor() { }

  ngOnInit() {
    
  }

}
