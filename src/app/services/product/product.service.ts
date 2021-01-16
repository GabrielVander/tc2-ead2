import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Product from '../../models/Product';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = new BehaviorSubject<Product[]>([]);
  #apiUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {
    httpClient.get<Product[]>(`${this.#apiUrl}/products`)
      .subscribe(value => this.products.next(value));
  }

}
