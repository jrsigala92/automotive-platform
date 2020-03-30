import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../cars.service';
import { Car } from '../../car.model';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {
  car: Car = new Car();
  carId: string;
  constructor(
    private carsService: CarsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.carId = this.route.snapshot.paramMap.get('id');
    console.log(this.carId);
    this.onGetCar(this.carId);
  }

  onCreate() {
    console.log(this.car);
    this.carsService.insertCar(this.car).subscribe();
    this.car = new Car();
    this.router.navigateByUrl('cars/cars-index');
  }

  onGetCar(id: string) {
    if (this.carId) {
      this.carsService.getCar(id).toPromise().then(res => {
        console.log(res.data);
        this.car = res as Car;
      }).catch(error =>
        console.log(error));
    }
  }

  onUpdate(id: string) {
    this.carsService.updateCar(id, this.car);
    this.car = new Car();
    this.router.navigateByUrl('cars/cars-index');
  }
}
