import { Component, inject, OnInit } from '@angular/core';
import { CustomerStore } from '../../store/CustomerStore';
import { CommonModule, JsonPipe } from '@angular/common';
import { Customer } from '../../model/customer';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  standalone: true,
  imports: [
    JsonPipe,
    CommonModule,
    RouterModule,
    MatTableModule,
    MatButtonToggleModule,
    MatIconModule,
    MatChipsModule,
    FlexLayoutModule,
  ],
  providers: [
    CustomerStore,
  ],
})
export class CustomersComponent implements OnInit {

  store = inject(CustomerStore);

  list = this.store.list;

  displayedColumns = ['id', 'name', 'email', 'address', 'ip_address', 'active', 'manage'];

  ngOnInit(): void {
    this.store.load();
  }

  onRemove(customer: Customer): void {
    this.store.removeItem(customer);
  }

}
