import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductService } from '../product.service';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.productService.getProducts().subscribe((products) => {
      this.product = products.find((p) => p.id === id)!;
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('El producto ha sido añadido al carrito');
  }
}
