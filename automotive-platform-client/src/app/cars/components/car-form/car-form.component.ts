import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../cars.service';
import { Car } from '../../car.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CarTypesService } from '../../../car-types/car-types.service';
import { CarType } from '../../../car-types/car-type.model';


@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {
  car: Car = new Car();
  carTypes: CarType[];
  carId: string;
  constructor(
    private carsService: CarsService,
    private carTypesService: CarTypesService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.carId = this.route.snapshot.paramMap.get('id');
    this.onGetCarTypes();
    this.onGetCar(this.carId);
  }

  onCreate() {
    console.log(this.car);
    this.carsService.insertCar(this.car).subscribe();
    this.car = new Car();
    this.router.navigateByUrl('cars/cars-index');
  }

  onUpdate() {
    console.log(this.car);
    this.carsService.updateCar(this.carId, this.car).subscribe();
    this.car = new Car();
    this.router.navigateByUrl('cars/cars-index');
  }

  async onGetCarTypes() {
    await this.carTypesService.getCarTypes().subscribe(res => this.carTypes = res);
  }

  async onGetCar(id: string) {
    if (this.carId) {
      await this.carsService.getCar(id).toPromise().then(res => {
        this.car = res as Car;
      }).catch(error =>
        console.log(error));
    }
    console.log(this.car);
  }

  // onUpdate(id: string) {
  //   this.carsService.updateCar(id, this.car);
  //   this.car = new Car();
  //   this.router.navigateByUrl('cars/cars-index');
  // }
}
