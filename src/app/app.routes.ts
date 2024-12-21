import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'coffee', loadChildren: () => import('./coffee/coffee.module').then(m => m.CoffeeModule) },
  { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) }
];
