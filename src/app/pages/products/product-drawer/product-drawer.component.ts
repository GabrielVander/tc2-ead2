import {Component} from '@angular/core';
import Product from '../../../models/Product';
import {ProductService} from '../../../services/product/product.service';

@Component({
  selector: 'app-product-drawer',
  templateUrl: './product-drawer.component.html',
  styleUrls: ['./product-drawer.component.css']
})
export class ProductDrawerComponent {
  selectedProduct: Product = null;

  constructor(private productService: ProductService) {
    productService.selectedProduct.subscribe(product => this.selectedProduct = product);
  }

  close(): void {
    this.productService.deselectProduct();
  }
}
