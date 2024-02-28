import { Component, OnInit, inject, signal } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../model/product';
import { AsyncPipe, CommonModule, CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { FilterPipe } from '../../pipe/filter.pipe';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    CommonModule,
    AsyncPipe,
    UpperCasePipe,
    CurrencyPipe,
    FilterPipe,
    RouterModule,
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {
  productService = inject(ProductService);

  list$: Observable<Product[]> = this.productService.getAll();

  filterPhrase = signal<string>('');
}
