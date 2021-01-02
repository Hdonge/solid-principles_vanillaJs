/**
 * Principle: Liskov Substitution Principle
 * It says objects of super/parent class should be replaceable with objects of
 * sub/child classes without breaking application or its result.
 * That requires the objects of your subclass to behave in same way
 * as the obejcts of your superclass.
 */

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    setWidth(width) {
        this.width = width;
    }

    setHeight(height) {
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

class Square extends Rectangle {
    setWidth(width) {
        this.width = width;
        this.height = width;
    }

    setHeight(height) {
        this.width = width;
        this.height = height;
    }
}

function increaseRectangleWidth(rectangle) {
    return rectangle.setWidth(rectangle.width + 1);
}

let rectangle1 = new Rectangle(10, 2);
let rectangle2 = new Rectangle(5, 5);

increaseRectangleWidth(rectangle1);
increaseRectangleWidth(rectangle2);

console.log(rectangle1.area());
console.log(rectangle2.area());

/**
 * Here If I replace the rectangle2 object with instance of child class of
 * Rectangle class i.e. Square class then it should behave exactly same without
 * changes in result.
 * If results are getting changed that means it is violating LSP
 * where logic needs to be corrected.
 */

rectangle2 = new Square(5, 5);
increaseRectangleWidth(rectangle2);
console.log(rectangle2.area());

/**
 * Above final result is changed after replacing Rectangle with Square class instance
 * which violated LSP
 */
