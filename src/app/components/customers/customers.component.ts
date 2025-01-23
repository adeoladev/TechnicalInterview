import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ICustomer } from '../../interfaces/customer';
import { DataService } from '../../services/data.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-customers',
  imports: [AsyncPipe],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent {

  dataService = inject(DataService)

  customerList$: Observable<ICustomer[]> = new Observable<ICustomer[]>;

  ngOnInit(): void {
    this.customerList$ = this.dataService.getCustomers();
  }
}
