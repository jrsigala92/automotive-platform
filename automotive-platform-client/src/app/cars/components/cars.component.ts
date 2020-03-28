import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: Array<any>;
  constructor(private carsService: CarsService) { }

  ngOnInit(): void {
    this.cars = [];
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
