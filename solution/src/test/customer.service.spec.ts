import { TestBed } from '@angular/core/testing';

import { CustomerService } from '../app/service/customer.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { customers } from './customers';

describe('CustomerService', () => {
  let service: CustomerService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CustomerService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have the update method', () => {
    expect(typeof service.update).toBe('function');
  });

  it('update method should return the updated customer', () => {
    service.apiUrl = '/data';

    service.update(customers[0]).subscribe( customer => {
      expect(customer).toEqual(customers[0]);
    });
    const req = httpTestingController.expectOne('/data/2');
    expect(req.request.method).toEqual('PATCH');

    // Finally, assert that there are no outstanding requests.
    httpTestingController.verify();
  });

  it('should have the create method', () => {
    expect(typeof service.update).toBe('function');
  });

  it('create method should return the new customer', () => {
    service.apiUrl = '/data';

    service.create(customers[1]).subscribe( customer => {
      expect(customer).toEqual(customers[1]);
    });
    const req = httpTestingController.expectOne('/data');
    expect(req.request.method).toEqual('POST');

    // Finally, assert that there are no outstanding requests.
    httpTestingController.verify();
  });

  it('should have the remove method', () => {
    expect(typeof service.remove).toBe('function');
  });

  it('remove method should return the removed customer', () => {
    service.apiUrl = '/data';

    service.remove(customers[1]).subscribe( customer => {
      expect(customer).toEqual(customers[1]);
    });
    const req = httpTestingController.expectOne('/data/3');
    expect(req.request.method).toEqual('DELETE');

    // Finally, assert that there are no outstanding requests.
    httpTestingController.verify();
  });

});
