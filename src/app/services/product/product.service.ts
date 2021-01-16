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

  private getProducts(): void {
    this.httpClient.get<Product[]>(`${this.#apiUrl}/products`)
      .subscribe(value => this.products.next(value));
  }
}
