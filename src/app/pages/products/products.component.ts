import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product/product.service';
import Product from '../../models/Product';

@Component({
  selector: 'app-welcome',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  data: Product[] = [];

  loading = false;

  constructor(private productService: ProductService) {
    productService.products.subscribe(products => this.data = products);
  }

  ngOnInit(): void {
  }

  deleteProduct(id: string): void {
    this.productService.deleteProduct(id);
  }
}
