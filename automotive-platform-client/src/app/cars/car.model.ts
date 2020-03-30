export class Car {
    _id: string;
    name: string;
    year: number;
    description: string;

    constructor(name?, year?, description?) {
        this.name = name;
        this.year = year;
        this.description = description;
    }
}

