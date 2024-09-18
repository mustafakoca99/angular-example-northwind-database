import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TcmbService {
  apiUrl: string = 'https://localhost:*****/api/'; //***** olan yere kendi port numaranızı yazınız

  constructor(private httpClient: HttpClient) {}

  getDollars(): Observable<number> {
    let url = this.apiUrl + 'tcmb/getdollar';
    return this.httpClient.get<number>(url);
  }
}
