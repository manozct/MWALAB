/**
 * Created by manozct on 7/10/2017.
 */
class BaseObject {

    width: number = 0;
    length: number = 0;

}
class Rectangle extends BaseObject {
    constructor() {
        super();
        this.width = 5;
        this.length = 2;

    }

    calcSize() {
        return this.width * this.length;

    }
}
var rectangle = new Rectangle();
console.log(rectangle.calcSize());