import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IUser } from '../interfaces/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  http = inject(HttpClient)
  constructor() { }

  getUsers(): Observable<IUser[]>{
    return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
  }

  getCustomers() {
    return this.http.get('https://localhost:7115/Customer') 
  }
}
