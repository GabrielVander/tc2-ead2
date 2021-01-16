import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Product from '../../models/Product';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = new BehaviorSubject<Product[]>([]);
  selectedProduct = new BehaviorSubject<Product>(null);
  addProductModalIsVisible = new BehaviorSubject<boolean>(false);
  saving = new BehaviorSubject<boolean>(false);

  #apiUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {
    this.getProducts();
  }

  public deleteProduct(id: string): void {
    this.httpClient.delete(`${this.#apiUrl}/products/${id}`)
      .subscribe(() => this.getProducts());
  }

  public selectProduct(id: string): void {
    this.httpClient.get<Product>(`${this.#apiUrl}/products/${id}`)
      .subscribe(value => this.selectedProduct.next(value));
  }

  public deselectProduct(): void {
    this.selectedProduct.next(null);
  }

  public showAddProductModal(): void {
    this.addProductModalIsVisible.next(true);
  }

  public hideAddProductModal(): void {
    this.addProductModalIsVisible.next(false);
  }

  public saveProduct(product: Product): void {
    this.saving.next(true);
    this.httpClient.post(this.#apiUrl + '/products', product)
      .subscribe(() => {
        this.saving.next(false);
        this.hideAddProductModal();
        this.getProducts();
      });
  }

  private getProducts(): void {
    this.httpClient.get<Product[]>(`${this.#apiUrl}/products`)
      .subscribe(value => this.products.next(value));
  }
}
