import { Module } from '@nestjs/common';
import { CarTypesService } from './car-types.service';
import { CarType } from './models/car-type.model';
import { MongooseModule } from '@nestjs/mongoose';
import { CarTypesController } from './car-types.controller';

@Module({
    imports: [MongooseModule.forFeature([
      { name: CarType.modelName, schema: CarType.schema }]
    )],
    controllers: [CarTypesController],
    providers: [
        CarTypesService
    ],
})
export class CarTypesModule {}
