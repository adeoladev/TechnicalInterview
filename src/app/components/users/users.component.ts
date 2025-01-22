import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
import { AsyncPipe } from '@angular/common';
import { IUser } from '../../interfaces/users';

@Component({
  selector: 'app-users',
  imports: [AsyncPipe],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {

  dataService = inject(DataService)
  userList$: Observable<IUser[]> = new Observable<IUser[]>;

  customers: any

  ngOnInit(): void {
    this.userList$ = this.dataService.getUsers();

    this.dataService.getCustomers().subscribe((res)=>{
      this.customers = res;
      console.log(res)
    })
  }
}
