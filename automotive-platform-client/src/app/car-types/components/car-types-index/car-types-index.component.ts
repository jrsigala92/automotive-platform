import { Component, OnInit } from '@angular/core';
import { CarType } from '../../car-type.model';
import { CarTypesService } from '../../car-types.service';

@Component({
  selector: 'app-car-types-index',
  templateUrl: './car-types-index.component.html'
})
export class CarTypesIndexComponent implements OnInit {
  carTypes: Array<CarType>;
  constructor(private carsService: CarTypesService) { }

  ngOnInit(): void {
    this.carTypes = [];
    this.onGetCarTypes();
  }

  onGetCarTypes() {
    this.carsService.getCarTypes().subscribe(res => {
      console.log(res);
      this.carTypes = res as CarType[];
      console.log(this.carTypes);
    });
  }

  onDeleteCarType(id: string) {
    console.log(id);
    this.carsService.deleteCarType(id).subscribe();
    this.onGetCarTypes();
  }

}

