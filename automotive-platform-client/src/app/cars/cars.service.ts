import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from './car.model';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private httpClient: HttpClient) { }
  getCars(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/cars');
  }

  insertCar(car: Car): Observable<any> {
    return this.httpClient.post('http://localhost:3000/cars/create', car);
  }
}
