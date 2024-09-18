import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl: string = 'https://localhost:*****/api/'; //***** olan yere kendi port numaranızı yazınız

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<ListResponseModel<Product>> {
    let url = this.apiUrl + 'products/getall';
    return this.httpClient.get<ListResponseModel<Product>>(url);
  }

  getProductsByCategory(
    categoryId: number
  ): Observable<ListResponseModel<Product>> {
    let url =
      this.apiUrl + 'products/getListByCategory?categoryId=' + categoryId;
    return this.httpClient.get<ListResponseModel<Product>>(url);
  }
}
