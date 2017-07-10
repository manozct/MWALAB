/**
 * Created by manozct on 7/10/2017.
 */
class Car {
    acceleration: number = 0;

    constructor(public name: string) {}

    honk() {
        console.log(this.name + ' is saying: Toooooooot!');
    }

    acccelerate(speed: number) {
        this.acceleration = this.acceleration + speed;

    }
}
let car = new Car('BMW');
car.honk();
console.log(car.acceleration);
car.acccelerate(60);
console.log(car.acceleration);