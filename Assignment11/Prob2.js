/**
 * Created by manozct on 7/10/2017.
 */
var Car = (function () {
    function Car(name) {
        this.name = name;
        this.acceleration = 0;
    }
    Car.prototype.honk = function () {
        console.log(this.name + ' is saying: Toooooooot!');
    };
    Car.prototype.acccelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var car = new Car('BMW');
car.honk();
console.log(car.acceleration);
car.acccelerate(60);
console.log(car.acceleration);
