import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServicesController } from './services/services.controller';
import { ServicesService } from './services/services.service';
import { CarsController } from './cars/cars.controller';
import { CarsService } from './cars/cars.service';

@Module({
  imports: [],
  controllers: [AppController, ServicesController, CarsController],
  providers: [AppService, ServicesService, CarsService],
})
export class AppModule {}
