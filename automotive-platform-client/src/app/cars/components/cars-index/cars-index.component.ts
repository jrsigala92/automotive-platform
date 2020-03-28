import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../cars.service';

@Component({
  selector: 'app-cars-index',
  templateUrl: './cars-index.component.html',
  styleUrls: ['./cars-index.component.css']
})
export class CarsIndexComponent implements OnInit {
  cars: Array<any>;
  constructor(private carsService: CarsService) { }

  ngOnInit(): void {
    this.cars = [];
    this.onGetCars();
  }

  onGetCars() {
    this.carsService.getCars().subscribe(res => {
      this.cars = res;
    });
  }

  onClick() {
    this.onGetCars();
  }

}
