import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "shop",
    loadComponent: () => import('./page/shop/shop.component').then(
      m => m.ShopComponent
    ),
  },
  {
    path: "shop/edit/:id",
    loadComponent: () => import('./page/shop-edit/shop-edit.component').then(
      m => m.ShopEditComponent
    ),
  },
  {
    path: "shop/cart",
    loadComponent: () => import('./page/cart/cart.component').then(
      m => m.CartComponent
    ),
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  },
];
