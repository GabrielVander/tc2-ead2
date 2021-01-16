import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ProductService} from '../../../services/product/product.service';
import Product from '../../../models/Product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  validateForm!: FormGroup;

  loading: boolean;

  submitForm(): void {
    const product: Product = {
      title: this.validateForm.controls.title.value,
      description: this.validateForm.controls.description.value,
      price: this.validateForm.controls.price.value,
    };

    this.productService.saveProduct(product);
  }

  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.productService.saving.subscribe(value => this.loading = value);
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      price: [null, [Validators.required]]
    });
  }
}
