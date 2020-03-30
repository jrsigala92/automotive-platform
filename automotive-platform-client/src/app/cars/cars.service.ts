import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from './car.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})


export class CarsService {
  constructor(private httpClient: HttpClient) { }
  getCars(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/cars');
  }

  getCar(id: string): Observable<any> {
    return this.httpClient.get('http://localhost:3000/cars/car/' + id);
  }

  insertCar(car: Car): Observable<any> {
    return this.httpClient.post('http://localhost:3000/cars/create', car);
  }

  updateCar(id: string, car: Car): Observable<any> {
    return this.httpClient.put('http://localhost:3000/cars/update/' + id, car);
  }

  deleteCar(id: string): Observable<any> {
    console.log(id);
    return this.httpClient.delete('http://localhost:3000/cars/delete/' + id);
  }
}
