import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./views/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./views/signup/signup.page').then((m) => m.SignUpPage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
