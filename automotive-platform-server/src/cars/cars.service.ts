import { Injectable, Inject } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { Model } from 'mongoose';
import { CreateCarDto } from './dto/create.-car.dto';

@Injectable()
export class CarsService {
    constructor(
        @Inject('CAR_MODEL')
        private carModel: Model<Car>,
    ){ }

    private readonly cars: any[] = [];

    async create(createCarDto: CreateCarDto): Promise<Car> {
        const createdCar = new this.carModel(createCarDto);
        return createdCar.save();
    }

    async findAll(): Promise<Car[]> {
        console.log(this.carModel.find().exec());
        return this.carModel.find().exec();
    }

    testCars() {
        this.cars.push({name: 'Seat Ibiza', year: 2018, description: 'little big monster'});
        this.cars.push({name: 'Mazda 3', year: 2018, description: 'little big monster'});
        this.cars.push({name: 'Volkswagen Gol', year: 2018, description: 'little big monster'});
    }
}

