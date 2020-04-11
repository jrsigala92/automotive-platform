import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarType } from './car-type.model';

@Injectable({
  providedIn: 'root'
})
export class CarTypesService {
  constructor(private httpClient: HttpClient) { }
  getCarTypes(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/car-types');
  }

  getCarType(id: string): Observable<any> {
    return this.httpClient.get('http://localhost:3000/car-types/car-type/' + id);
  }

  insertCarType(car: CarType): Observable<any> {
    return this.httpClient.post('http://localhost:3000/car-types/create', car);
  }

  updateCarType(id, car: CarType): Observable<any> {
    console.log(car);
    return this.httpClient.put('http://localhost:3000/car-types/update/' + id, {name: car.name});
  }

  deleteCarType(id: string): Observable<any> {
    console.log(id);
    return this.httpClient.delete('http://localhost:3000/car-types/delete/' + id);
  }
}
