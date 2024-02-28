import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CustomerEditComponent } from '../app/page/customer-edit/customer-edit.component';

import { customers } from './customers';
import { CustomerService } from '../app/service/customer.service';
import { of } from 'rxjs';
import { CustomersComponent } from '../app/page/customers/customers.component';
import { By } from '@angular/platform-browser';

describe('CustomerEditComponent', () => {
  let component: CustomerEditComponent;
  let fixture: ComponentFixture<CustomerEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CustomerEditComponent,
        RouterTestingModule.withRoutes([
          { path: 'customers', component: CustomersComponent },
        ]),
      ],
      providers: [
        {
          provide: CustomerService,
          useValue: {
            get: () => of(customers[0]),
            update: () => of(customers[0]),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('error message of the name field should be displayed', async () => {
    const nameField = fixture.debugElement.query(By.css('input[name="name"]'));
    nameField.nativeElement.value = '';
    nameField.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    await fixture.whenStable();

    const errorMessage = nameField.nativeElement.parentElement.querySelector('small.text-danger');
    expect(errorMessage).toBeTruthy();
  });

  it('error message of the email field should be displayed', async () => {
    const emailField = fixture.debugElement.query(By.css('input[name="email"]'));
    emailField.nativeElement.value = '';
    emailField.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    await fixture.whenStable();

    const errorMessage = emailField.nativeElement.parentElement.querySelector('small.text-danger');
    expect(errorMessage).toBeTruthy();
  });

  it('error message of the address field should be displayed', async () => {
    const field = fixture.debugElement.query(By.css('input[name="address"]'));
    field.nativeElement.value = '';
    field.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    await fixture.whenStable();

    const errorMessage = field.nativeElement.parentElement.querySelector('small.text-danger');
    expect(errorMessage).toBeTruthy();
  });

  it('error message of the ip_address field should be displayed', async () => {
    const field = fixture.debugElement.query(By.css('input[name="ip_address"]'));
    field.nativeElement.value = '';
    field.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    await fixture.whenStable();

    const errorMessage = field.nativeElement.parentElement.querySelector('small.text-danger');
    expect(errorMessage).toBeTruthy();
  });

  it('submit button should be disabled', async () => {
    const field = fixture.debugElement.query(By.css('input[name="name"]'));
    field.nativeElement.value = '';
    field.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    await fixture.whenStable();

    const button = fixture.debugElement.query(By.css('button[type="submit"]'));
    expect(button.nativeElement.disabled).toBeTruthy();
  });
});
