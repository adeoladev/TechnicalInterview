import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ICustomer } from '../interfaces/customer';
import { Observable, of } from 'rxjs';
//import { IEmployee } from '../interfaces/Employee';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  http = inject(HttpClient)

  //employee: IEmployee = {FirstName: "Nancy", LastName: "Davol", BirthDate: "08/12/1948", Address: "507 - 20th Ave. E.Apt. 2A", Notes:"Education includes a BA in psychology from Colorado State University in 1970.  She also completed The Art of the Cold Call.  Nancy is a member of Toastmasters International."}

  getCustomers(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>('https://localhost:7115/Customer') 
  }

  getEmployee(): Observable<any[]> {
    return of([
      {
      FirstName: "Nancy", 
      LastName: "Davol", 
      BirthDate: "08/12/1948", 
      Address: "507 - 20th Ave. E.Apt. 2A", 
      Notes:"Education includes a BA in psychology from Colorado State University in 1970.  She also completed The Art of the Cold Call.  Nancy is a member of Toastmasters International.",
      Title:"Sales Representative"
      },
      {
        FirstName: "Andrew", 
        LastName: "Fuller", 
        BirthDate: "19/02/1952", 
        Address: "908 W. Capital Way", 
        Title: "Vice President, Sales",
        Notes:"Andrew received his BTS commercial in 1974 and a Ph.D. in international marketing from the University of Dallas in 1981.  He is fluent in French and Italian and reads German.  He joined the company as a sales representative, was promoted to sales manager in January 1992 and to vice president of sales in March 1993.  Andrew is a member of the Sales Management Roundtable, the Seattle Chamber of Commerce, and the Pacific Rim Importers Association."
      },
      {
        FirstName: "Janet", 
        LastName: "Leverling", 
        BirthDate: "30/08/1963", 
        Address: "722 Moss Bay Blvd.", 
        Title:"Sales Representative",
        Notes:"Janet has a BS degree in chemistry from Boston College (1984).  She has also completed a certificate program in food retailing management.  Janet was hired as a sales associate in 1991 and promoted to sales representative in February 1992."
      },
    ]);
  }
}
