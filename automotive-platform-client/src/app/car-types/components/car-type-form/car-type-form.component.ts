import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CarType } from '../../car-type.model';
import { CarTypesService } from '../../car-types.service';



@Component({
  selector: 'app-car-type-form',
  templateUrl: './car-type-form.component.html',
})
export class CarTypeFormComponent implements OnInit {
  carType: CarType = new CarType();
  carTypeId: string;
  constructor(
    private carTypesService: CarTypesService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.carTypeId = this.route.snapshot.paramMap.get('id');
    console.log(this.carTypeId);
    this.onGetCar(this.carTypeId);
  }

  onCreate() {
    console.log(this.carType);
    this.carTypesService.insertCarType(this.carType).subscribe();
    this.carType = new CarType();
    this.router.navigateByUrl('car-types/car-types-index');
  }

  onUpdate() {
    console.log(this.carType);
    this.carTypesService.updateCarType(this.carTypeId, this.carType).subscribe();
    this.carType = new CarType();
    this.router.navigateByUrl('car-types/car-types-index');
  }

  async onGetCar(id: string) {
    if (this.carTypeId) {
      await this.carTypesService.getCarType(id).toPromise().then(res => {
        this.carType = res as CarType;
      }).catch(error =>
        console.log(error));
    }
    console.log(this.carType);
  }
}
