import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { Car } from './models/car.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [MongooseModule.forFeature([
      { name: Car.modelName, schema: Car.schema }]
    )],
    controllers: [CarsController],
    providers: [
        CarsService
    ],
})
export class CarsModule {}
