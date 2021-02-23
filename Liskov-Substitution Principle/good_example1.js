/**
 * To fix previous Problem we can create some how Shape class as parent can have 
 */
/**
 * Here area function is the abstract method of the both the classes and children can have their own implementation.
 * SetHeight and SetWidth methods are not part of the abstraction so it can be implemented by children per their own requirements.
 */
class Shape {
    area() {
        //abstraction logic goes here which can be followed by children
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
    }
    
    area() {
        return this.width * this.width;
    }
}
