import { Controller, Get, Post } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private carService: CarsService) { }

  @Post()
  create(): string {
    return 'This action adds a new car';
  }

  @Get()
  async findAll(): Promise<Car[]> {
    console.log('findAll');
    return this.carService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id): string {
  //   return `This action returns a #${id} cat`;
  // }

}