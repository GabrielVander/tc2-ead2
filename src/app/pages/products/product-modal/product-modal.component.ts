import { Component } from '@angular/core';
import {ProductService} from '../../../services/product/product.service';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html'
})
export class ProductModalComponent {
  isVisible;

  constructor(private productService: ProductService) {
    this.productService.addProductModalIsVisible.subscribe(value => this.isVisible = value);
  }

  handleCancel(): void {
    this.productService.hideAddProductModal();
  }
}
