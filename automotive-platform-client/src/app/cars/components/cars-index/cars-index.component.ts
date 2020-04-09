import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../cars.service';
import { Car } from '../../car.model';

@Component({
  selector: 'app-cars-index',
  templateUrl: './cars-index.component.html',
  styleUrls: ['./cars-index.component.css']
})
export class CarsIndexComponent implements OnInit {
  cars: Array<Car>;
  constructor(private carsService: CarsService) { }

  ngOnInit(): void {
    this.cars = [];
    this.onGetCars();
  }

  onGetCars() {
    this.carsService.getCars().subscribe(res => {
      console.log(res);
      this.cars = res as Car[];
      console.log(this.cars);
    });
  }

  onDeleteCar(id: string) {
    console.log(id);
    this.carsService.deleteCar(id).subscribe();
    this.onGetCars();
  }

}
