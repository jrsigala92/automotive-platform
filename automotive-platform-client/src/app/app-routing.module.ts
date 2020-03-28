import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsComponent } from './cars/components/cars.component';
import { CarFormComponent } from './cars/components/car-form/car-form.component';
import { CarsIndexComponent } from './cars/components/cars-index/cars-index.component';


const routes: Routes = [
  {path: '', redirectTo: 'cars', pathMatch: 'full'},
  {path: 'cars', component: CarsComponent,
  children: [
    { path: 'cars-index', component: CarsIndexComponent },
    { path: 'car-form/:id', component: CarFormComponent },
    { path: 'car-form', component: CarFormComponent }]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
