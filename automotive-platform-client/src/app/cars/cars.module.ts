import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarFormComponent } from './components/car-form/car-form.component';
import { CarsService } from './cars.service';
import { CarsComponent } from './components/cars.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { CarsIndexComponent } from './components/cars-index/cars-index.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [
    CarsComponent,
    CarFormComponent,
    CarsIndexComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    TableModule,
    ButtonModule
  ],
  providers: [CarsService]
})
export class CarsModule { }
