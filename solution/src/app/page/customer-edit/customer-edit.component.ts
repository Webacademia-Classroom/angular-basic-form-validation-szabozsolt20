import { Component, Input, OnInit, inject, numberAttribute } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { of } from 'rxjs';
import { Customer } from '../../model/customer';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-customer-edit',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  templateUrl: './customer-edit.component.html',
  styleUrl: './customer-edit.component.scss'
})
export class CustomerEditComponent implements OnInit {
  @Input({ transform: numberAttribute }) id = 0;

  customerService = inject(CustomerService);

  router = inject(Router);

  customer$ = of( new Customer() );

  ngOnInit(): void {
    this.customer$ = this.customerService.get(this.id);
  }

  onSubmit(customer: Customer) {
    this.customerService.update(customer).subscribe(() => {
      this.router.navigate(['/customers']);
    });
  }
}
