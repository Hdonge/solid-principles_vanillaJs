/**
 * Principle: Liskov Substitution Principle
 * It says objects of super/parent class should be replaceable with objects of
 * sub/child classes without breaking application or its result.
 * That requires the objects of your subclass to behave in same way
 * as the obejcts of your superclass.
 */

class Bird {
    fly() {
        console.log('I can fly');
    }
}

class Duck extends Bird {
    quack() {
        console.log('I can quack');
    }
}

class Penguin extends Bird {
    fly() {
        throw new Error('Can\'t fly');
    }

    swim() {
        console.log('I can swim');
    }
}

function makeBirdFly(bird) {
    bird.fly();
}

const duck = new Duck();
const penguin = new Penguin();

makeBirdFly(duck);
makeBirdFly(penguin);


/**
 * Here Penguin and Duck are children of Bird class. Still Penguin can't fly
 * So here it is violating LSP.
 */