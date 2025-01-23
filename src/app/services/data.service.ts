import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ICustomer } from '../interfaces/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  http = inject(HttpClient)

  getCustomers(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>('http://localhost:5040/Customer') 
  }
}
