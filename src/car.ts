class Car {
    brand: string
    speed: number

    constructor(brand: string, speed: string) {
        this.brand = 'Toyota';
        this.speed = 100
    }

    accelerate(): void {
        this.speed = 120
        console.log(`Speed is now ${this.speed}`);
    }
}

const car = new Car('Toyota', '100')
console.log(car.accelerate()) // After fixing: will print 120
