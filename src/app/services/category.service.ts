import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl: string = 'https://localhost:*****/api/categories/getall'; //***** olan yere port numaranızı yazınız

  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<ListResponseModel<Category>>{
    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl);
  }
}
