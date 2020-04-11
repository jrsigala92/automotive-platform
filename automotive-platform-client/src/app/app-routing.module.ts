import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsComponent } from './cars/components/cars.component';
import { CarFormComponent } from './cars/components/car-form/car-form.component';
import { CarsIndexComponent } from './cars/components/cars-index/cars-index.component';
import { CarTypesComponent } from './car-types/components/car-types.component';
import { CarTypesIndexComponent } from './car-types/components/car-types-index/car-types-index.component';
import { CarTypeFormComponent } from './car-types/components/car-type-form/car-type-form.component';


const routes: Routes = [
  {path: '', redirectTo: 'cars',  pathMatch: 'full'},
  {path: 'cars', component: CarsComponent,
  children: [
    { path: '', redirectTo: 'cars-index', pathMatch: 'full'  },
    { path: 'cars-index', component: CarsIndexComponent },
    { path: 'car-form/:id', component: CarFormComponent },
    { path: 'car-form', component: CarFormComponent }]},

    {path: 'car-types', component: CarTypesComponent,
  children: [
    { path: '', redirectTo: 'car-types-index', pathMatch: 'full'  },
    { path: 'car-types-index', component: CarTypesIndexComponent },
    { path: 'car-type-form/:id', component: CarTypeFormComponent },
    { path: 'car-type-form', component: CarTypeFormComponent }]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
