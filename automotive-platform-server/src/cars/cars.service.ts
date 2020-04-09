import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Car } from './models/car.model';
import { BaseService } from 'src/services/base.service';
import { ReturnModelType } from '@typegoose/typegoose';
@Injectable()
export class CarsService extends BaseService<Car> {
    // export class CarsService {

    constructor(
        @InjectModel(Car.modelName)
        private readonly carModel: ReturnModelType<typeof Car>,
    ) {
        super(carModel);
    }
}

