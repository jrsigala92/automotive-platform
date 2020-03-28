import { Controller, Get, Post, Res, Body, HttpStatus } from '@nestjs/common';
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