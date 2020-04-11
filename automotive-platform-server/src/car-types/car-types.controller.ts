import { Controller, Get, Post, Res, Body, HttpStatus, Param, Put, Delete, Query, NotFoundException } from '@nestjs/common';
import { CarTypesService } from './car-types.service';
import { CarType } from './models/car-type.model';
import { CarTypeViewModel } from './view-models/car-type.viewmodel';

@Controller('car-types')
export class CarTypesController {
  constructor(private readonly carTypeService: CarTypesService) { }

  @Post('/create')
  async addCarType(@Res() res, @Body() createCarTypeDTO: CarType) {
    console.log(createCarTypeDTO);
    // let carToCreate = new CarType(createCarTypeDTO);
    const car = await this.carTypeService.create(createCarTypeDTO);
    return res.status(HttpStatus.OK).json({
      message: "CarType has been created successfully",
      car
    })
  }

  @Get('car-type/:id')
  async findById(@Param('id') id): Promise<CarType> {
    return this.carTypeService.findById(id);
  }
  @Get()
  async findAll(): Promise<CarTypeViewModel[]> {
    return this.carTypeService.findAll();
  }

  @Put('/update/:id')
  async updateCarType(@Res() res, @Param('id') id, @Body() createCarTypeDTO: CarType) {
    console.log('controller update');
    console.log(createCarTypeDTO);
    const car = await this.carTypeService.updateAsync(id, createCarTypeDTO);
    if (!car) throw new NotFoundException('Car type does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Car Type has been successfully updated',
      car
    });
  }

  @Delete('/delete/:id')
  async deleteCarType(@Res() res, @Param('id') id) {
    const car = await this.carTypeService.delete(id);
    if (!car) throw new NotFoundException('Car type does not exist');
    return res.status(HttpStatus.OK).json({
      message: 'Car type has been deleted',
      car
    })
  }
}