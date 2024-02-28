import { Component, inject, OnInit, signal } from '@angular/core';
import { AsyncPipe, CommonModule, CurrencyPipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Customer } from '../../model/customer';
import { RouterModule } from '@angular/router';
import { CustomerService } from '../../service/customer.service';
import { IpPipe } from '../../pipe/ip.pipe';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    AsyncPipe,
    UpperCasePipe,
    LowerCasePipe,
    IpPipe,
  ],
})
export class CustomersComponent {
  customerService = inject(CustomerService);

  list = this.customerService.getAll();

  ipFilter = signal<string>('');

}
