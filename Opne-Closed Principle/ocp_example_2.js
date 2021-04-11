class AreaCalculator {
  area(shape) {
    return shape.calculateArea();
  }
}

//To support any shape we need have calculate area method
//written in those shape classes

//Consider Shape is an interface. Hence to support new shape no need to modify AreaCalculator class

class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  calculateArea() {
    return this.length * this.width;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

class Trignle {
  constructor(base, height) {
    this.base = base;
    this.height = height;
  }

  calculateArea() {
    return this.base * this.height * 0.5;
  }
}

const areaCalculator = new AreaCalculator();

const areaRectangle = areaCalculator.area(new Rectangle(2, 3));
console.log(areaRectangle);

const areaCircle = areaCalculator.area(new Circle(2));
console.log(areaCircle);

const areaTringle = areaCalculator.area(new Trignle(5, 3));
console.log(areaTringle);

/**
 * The common operation is done inside the if else statement can be
 * implemented inside the classes.
 */
