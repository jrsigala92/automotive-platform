import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../cars.service';
import { Car } from '../../car.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {
  car: Car = new Car();
  constructor(
    private carService: CarsService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onCreate() {
    console.log(this.car);
    this.carService.insertCar(this.car).subscribe();
    this.car = new Car();
    this.router.navigateByUrl('cars/cars-index');
  }
}
