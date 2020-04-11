import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarTypeFormComponent } from './components/car-type-form/car-type-form.component';
import { CarTypesIndexComponent } from './components/car-types-index/car-types-index.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CarTypesService } from './car-types.service';
import { CarTypesComponent } from './components/car-types.component';



@NgModule({
  declarations: [
    CarTypesComponent,
    CarTypeFormComponent,
    CarTypesIndexComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    TableModule,
    ButtonModule
  ],
  providers: [CarTypesService]
})
export class CarTypesModule { }
