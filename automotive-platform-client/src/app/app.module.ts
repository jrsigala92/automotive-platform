import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CarFormComponent } from './cars/components/car-form/car-form.component';
import { CarsComponent } from './cars/components/cars.component';
import { CarsModule } from './cars/cars.module';
import {InputTextModule} from 'primeng/inputtext';
import { CarsIndexComponent } from './cars/components/cars-index/cars-index.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarsModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
