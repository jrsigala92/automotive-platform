import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CarType } from './models/car-type.model';
import { BaseService } from 'src/shared/base.service';
import { ReturnModelType } from '@typegoose/typegoose';
@Injectable()
export class CarTypesService extends BaseService<CarType> {
    // export class CarsService {

    constructor(
        @InjectModel(CarType.modelName)
        private readonly carTypeModel: ReturnModelType<typeof CarType>,
    ) {
        super(carTypeModel);
    }
}

