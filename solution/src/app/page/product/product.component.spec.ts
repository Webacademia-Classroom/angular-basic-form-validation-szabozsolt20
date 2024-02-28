import 'zone.js/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductComponent } from './product.component';
import { ProductService } from '../../service/product.service';
import { products } from '../../../test/products';
import { Product } from '../../model/product';
import { CommonModule } from '@angular/common';
import { RouterModule, provideRouter, withComponentInputBinding } from '@angular/router';
import { FilterPipe } from '../../pipe/filter.pipe';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { routes } from '../../app.routes';

const productServiceMock = {
  getAll: () => of(products),
  remove: (product: Product) => of(product),
};

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ProductComponent,
        HttpClientTestingModule,
        CommonModule,
        RouterModule,
        FilterPipe,
        BrowserAnimationsModule,
        NoopAnimationsModule,
      ],
      providers: [
        provideRouter(routes, withComponentInputBinding()),
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('{{ list.length }}/{{ listQty }} rows in the table should be shown', async () => {
    component.list.set([]);
    fixture.detectChanges();
    await fixture.whenStable();

    const legend = fixture.debugElement.nativeElement.querySelector('.list-legend');
    expect(legend.textContent).toMatch(/no *products/i);

    component.list.set(products);
    fixture.detectChanges();
    await fixture.whenStable();

    expect(legend.textContent).toMatch(/4\/4 *rows *in *the *table/i);
  });

  it('sumPrice or the "no products" text should be shown', async () => {
    component.list.set([]);
    fixture.detectChanges();
    await fixture.whenStable();

    const legend = fixture.debugElement.nativeElement.querySelector('.sumprice-container');
    expect(legend.textContent).toMatch(/no *products/i);

    component.list.set(products);
    fixture.detectChanges();
    await fixture.whenStable();

    expect(legend.textContent).toMatch(/303/i);
  });

  it('activeQty or the "no products" text should be shown', async () => {
    component.list.set([]);
    fixture.detectChanges();
    await fixture.whenStable();

    const legend = fixture.debugElement.nativeElement.querySelector('.activeqty-container');
    expect(legend.textContent).toMatch(/no *products/i);

    component.list.set(products);
    fixture.detectChanges();
    await fixture.whenStable();

    expect(legend.textContent).toMatch(/3/i);
  });

  it('table headers should be shown', async () => {
    fixture.detectChanges();
    await fixture.whenStable();

    const ths = fixture.debugElement.nativeElement.querySelectorAll(
      'table thead tr th'
    );
    expect(ths.length).toBeGreaterThan(3);

    for (let i = 0; i < component.displayedColumns.length; i++) {
      expect(ths[i].textContent.toLowerCase()).toContain(
        component.displayedColumns[i]
      );
    }
  });

  it('table rows should contain correct data', async () => {
    component.list.set(products);
    fixture.detectChanges();
    await fixture.whenStable();

    const trs = fixture.debugElement.nativeElement.querySelectorAll(
      'table tbody tr'
    );
    expect(trs.length).toEqual(4);

    const td = trs[1].querySelector('td');
    expect(td.textContent).toMatch(/2/);
  });

  it('info button should not appear if the product is inactive', async () => {
    component.list.set(products);
    fixture.detectChanges();
    await fixture.whenStable();

    const trs = fixture.debugElement.nativeElement.querySelectorAll(
      'table tbody tr'
    );
    expect(trs.length).toEqual(4);

    const delBtn = trs[1].querySelector('button.btn-info');
    expect(delBtn).toBeFalsy();
  });

});
