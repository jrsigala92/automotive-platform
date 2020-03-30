import { Injectable, Inject } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { Model } from 'mongoose';
import { CreateCarDto } from './dto/create.-car.dto';

@Injectable()
export class CarsService {
    constructor(
        @Inject('CAR_MODEL')
        private carModel: Model<Car>,
    ) { }

    private readonly cars: any[] = [];

    async create(createCarDto: CreateCarDto): Promise<Car> {
        const createdCar = new this.carModel(createCarDto);
        return createdCar.save();
    }

    async findAll(): Promise<Car[]> {
        console.log(this.carModel.find().exec());
        return this.carModel.find().exec();
    }

    async findById(id): Promise<Car> {
        return this.carModel.findById(id).exec();
    }
    
    async updateCar(id, createCarDTO: CreateCarDto): Promise<Car> {
        const updatedCar = await this.carModel
            .findByIdAndUpdate(id, createCarDTO, { new: true });
        return updatedCar;
    }
    
    async deleteCar(id): Promise<any> {
        const deletedCar = await this.carModel.findByIdAndDelete(id);
        return deletedCar;
    }
}

