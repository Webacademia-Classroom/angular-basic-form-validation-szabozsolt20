import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CustomersComponent } from './customers.component';
import { CustomerService } from '../../service/customer.service';

import { customers } from '../../../test/customers';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';

describe('CustomersComponent', () => {
  let component: CustomersComponent;
  let fixture: ComponentFixture<CustomersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CustomersComponent,
        CommonModule,
        RouterTestingModule,
      ],
      providers: [{ provide: CustomerService, useValue: {
        list: customers,
        getAll: () => of(customers)
      } }],
    });
    fixture = TestBed.createComponent(CustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('info button should exist', () => {
    const infoBtn = fixture.debugElement.nativeElement.querySelector(
      'table tbody tr:first-child td:last-child button.btn-info'
    );
    expect(infoBtn).toBeTruthy();
  });

});
