import { Component, OnInit } from "@angular/core";
import { Product, ProductService } from "../product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {   
  }

  ngOnInit(): void {    
    this.productService.getProducts().subscribe((data: Product[]) => {
      console.log(data);      
      this.products = data;
    });
  }
}
