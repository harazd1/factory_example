
class Car {
    model: string;
    price: number;
    maxSpeed: number;

    constructor(model: string, price: number, maxSpeed: number) {
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed;
    }
}

class CarFactory {
    create(type: string) {
        if (type == 'Tesla')
            return new Car(type, 100000, 300);
        if (type == 'Bmw')
            return new Car(type, 90000, 275);
        if (type == 'Mercedes')
            return new Car(type, 70000, 250);
    }
}



const factory = new CarFactory();
const firstCar = factory.create('Tesla');
const secondCar = factory.create('Bmw');
const thirdCar = factory.create('Mercedes');

console.log(firstCar);
console.log(secondCar);
console.log(thirdCar);