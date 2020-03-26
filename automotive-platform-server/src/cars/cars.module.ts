import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { DatabaseModule } from 'src/database.module';
import { carsProviders } from './cars.providers';

@Module({
    imports: [DatabaseModule],
    controllers: [CarsController],
    providers: [
        CarsService,
        ...carsProviders
    ],
})
export class CarsModule {}
