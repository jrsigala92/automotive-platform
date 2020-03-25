import { Injectable } from '@nestjs/common';
import { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {
    private readonly cars: Car[] = [];

    create(car: Car) {
        this.cars.push(car);
    }

    findAll(): Car[] {
        this.testCars();
        return this.cars;
    }

    testCars() {
        this.cars.push({name: 'Seat Ibiza', year: 2018, description: 'little big monster'});
        this.cars.push({name: 'Mazda 3', year: 2018, description: 'little big monster'});
        this.cars.push({name: 'Volkswagen Gol', year: 2018, description: 'little big monster'});
    }
}

