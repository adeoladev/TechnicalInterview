import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ICustomer } from '../../interfaces/customer';
import { DataService } from '../../services/data.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';  
//import { IEmployee } from '../../interfaces/Employee';

@Component({
  selector: 'app-customers',
  imports: [AsyncPipe, NgFor],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent {

  dataService = inject(DataService)

  customerList$: Observable<ICustomer[]> = new Observable<ICustomer[]>;
  //employeeList$: Observable<IEmployee[]> = new Observable<IEmployee[]>;

  employees: any;

  ngOnInit(): void {
    this.customerList$ = this.dataService.getCustomers();
    this.dataService.getEmployee().subscribe(
      (response:any) => {
        console.log(response)
        this.employees = response
      }
    );
  }

}
