import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CoffeeComponent } from './coffee.component';


const routes: Routes = [
  { path: '', component: CoffeeComponent }
];

@NgModule({
  declarations: [
    CoffeeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CoffeeModule { }
