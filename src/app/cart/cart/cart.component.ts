import { Component } from '@angular/core';
import { Product } from '../../products/product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  items: Product[] = [];

  constructor(private cartService: CartService){}

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  clearCart() {
    this.items = this.cartService.clearCart();
  }

}
