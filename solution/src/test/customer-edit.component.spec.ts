import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CustomerEditComponent } from '../app/page/customer-edit/customer-edit.component';

import { customers } from './customers';
import { CustomerService } from '../app/service/customer.service';
import { of } from 'rxjs';
import { CustomersComponent } from '../app/page/customers/customers.component';

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
      providers: [{
        provide: CustomerService,
        useValue: {
          get: () => of( customers[0] ),
          update: () => of( customers[0] ),
        }
      }],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have id input', (done) => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const id = fixture.debugElement.nativeElement.querySelector(
        'form input[name="id"]'
      );
      expect(id).toBeTruthy();
      done();
    });
  });

  it('should have submit button', async () => {
    fixture.detectChanges();
    await fixture.whenStable();

    const button = fixture.debugElement.nativeElement.querySelector(
      'form button[type="submit"]'
    );
    expect(button).toBeTruthy();
  });

  it('onSubmit should be called with the loaded customer', async () => {
    const spy = jest.spyOn(component, 'onSubmit');

    fixture.detectChanges();
    await fixture.whenStable();

    const button = fixture.debugElement.nativeElement.querySelector(
      'form button[type="submit"]'
    );
    button.click();
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(customers[0]);
  });

});
