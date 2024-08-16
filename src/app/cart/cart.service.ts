import { Injectable } from '@angular/core';
import { Product } from '../products/product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: Product[] = [];

  constructor() { }

  addToCart(product: Product){
    this.items.push(product);
    console.log(this.items);
    
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
