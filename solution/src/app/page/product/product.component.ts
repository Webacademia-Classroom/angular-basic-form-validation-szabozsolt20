import { Component, OnInit, computed, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../service/product.service';
import { Product } from '../../model/product';
import { RouterModule } from '@angular/router';
import { FilterPipe } from '../../pipe/filter.pipe';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  imports: [
    CommonModule,
    RouterModule,
    FilterPipe,
  ],
  providers: [
    ProductService,
  ],
})
export class ProductComponent implements OnInit {

  productService = inject(ProductService);

  displayedColumns: string[] = ['id', 'name', 'price', 'description'];

  // Signals
  list = signal<Product[]>([]);

  filterText = signal<string>('');

  sumPrice = computed(() => {
    return this.list().reduce(( sum, item ) => sum + item.price, 0 );
  });

  activeQty = computed(() => {
    return this.list().filter(item => item.active).length;
  });

  listQty = 0;

  constructor() {
    effect(() => {
      this.listQty = this.list()?.length || 0;
    });
  }

  ngOnInit(): void {
    this.productService.getAll().subscribe(
      list => this.list.set(list)
    );
  }

  updateFilterText(ev: InputEvent): void {
    this.filterText.set((ev.target as HTMLInputElement).value as string);
  }

  onRemove(product: Product): void {
    this.productService.remove(product).subscribe(
      () => {
        this.list.update(list => list.filter(item => item.id !== product.id));
      }
    )
  }

}
