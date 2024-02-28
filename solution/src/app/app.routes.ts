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
    path: "customers",
    loadComponent: () => import('./page/customers/customers.component').then(
      m => m.CustomersComponent
    ),
  },
  {
    path: "customers/edit/:id",
    loadComponent: () => import('./page/customer-edit/customer-edit.component').then(
      m => m.CustomerEditComponent
    ),
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  },
];
