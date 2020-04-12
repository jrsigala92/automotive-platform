import { Controller, Get, Post, Res, Body, HttpStatus, Param, Put, Delete, Query, NotFoundException } from '@nestjs/common';
import { CarsService } from './cars.service';
import { Car } from './models/car.model';
import { CarViewModel } from './view-models/car.viewmodel';

@Controller('cars')
export class CarsController {
  constructor(private readonly carService: CarsService) { }

  @Post('/create')
  async addCar(@Res() res, @Body() createCarDTO: Car) {
    console.log(createCarDTO);
    // let carToCreate = new Car(createCarDTO);
    const car = await this.carService.create(createCarDTO);
    return res.status(HttpStatus.OK).json({
      message: "Car has been created successfully",
      car
    })
  }

  @Get('car/:id')
  async findById(@Param('id') id): Promise<Car> {
    return this.carService.findById(id);
  }
  @Get()
  async findAll(): Promise<CarViewModel[]> {
    return this.carService.findAll();
  }

  @Put('/update/:id')
  async updateCar(@Res() res, @Param('id') id, @Body() createCarDTO: Car) {
    console.log('controller update');
    console.log(createCarDTO);
    const car = await this.carService.updateAsync(id, createCarDTO);
    if (!car) throw new NotFoundException('Car does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Car has been successfully updated',
      car
    });
  }

  @Delete('/delete/:id')
  async deleteCar(@Res() res, @Param('id') id) {
    const car = await this.carService.deleteByIdAsync(id);
    if (!car) throw new NotFoundException('Car does not exist');
    return res.status(HttpStatus.OK).json({
      message: 'Car has been deleted',
      car
    })
  }
}