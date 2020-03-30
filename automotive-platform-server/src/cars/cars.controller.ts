import { Controller, Get, Post, Res, Body, HttpStatus, Param, Put, Delete, Query, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create.-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private carService: CarsService) { }

  @Post('/create')
  async addCar(@Res() res, @Body() createCarDTO: CreateCarDto) {
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
  async findAll(): Promise<Car[]> {
    return this.carService.findAll();
  }

  @Put('/update')
  async updateCar(@Res() res, @Query('id') id, @Body() createCarDTO: CreateCarDto) {
    const car = await this.carService.updateCar(id, createCarDTO);
    if (!car) throw new NotFoundException('Car does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Car has been successfully updated',
      car
    });
  }

  @Delete('/delete/:id')
  async deleteCar(@Res() res, @Param('id') id) {
    const car = await this.carService.deleteCar(id);
    if (!car) throw new NotFoundException('Car does not exist');
    return res.status(HttpStatus.OK).json({
      message: 'Car has been deleted',
      car
    })
  }
}