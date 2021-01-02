/**
 * To fix previous Problem we can create some how Shape class as parent can have 
 */

class Shape {
    area() {
        //logic goes here
    }
}

class Rectangle extends Shape{
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

class Square extends Shape {
    setWidth(width) {
        this.width = width;
        this.height = width;
    }

    setHeight(height) {
        this.width = width;
        this.height = height;
    }
}

function increaseShapeWidth(rectangle) {
    return rectangle.setWidth(rectangle.width + 1);
}
