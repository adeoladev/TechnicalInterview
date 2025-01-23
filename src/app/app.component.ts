import { Component } from '@angular/core';
import { CustomersComponent } from './components/customers/customers.component';

@Component({
  selector: 'app-root',
  imports: [CustomersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TechnicalInterview';
}
