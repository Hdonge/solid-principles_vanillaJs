class FlyingBird {
    fly() {
        console.log('I can fly');
    }
}

class SwimmingBird {
    swim() {
        console.log('I can swim');
    }
}

class Duck extends FlyingBird {
    quack() {
        console.log('I can quack');
    }
}

class Penguin extends SwimmingBird {
}

function makeFlyingBirdFly(bird) {
    bird.fly();
}

function makeSwimmingBirdSwim(bird) {
    bird.swim();
}

const duck = new Duck();
const penguin = new Penguin();

makeFlyingBirdFly(duck);
makeSwimmingBirdSwim(penguin);

/**
 * Above example follows LSP.
 * But Major problem here is with inheritance is Duck can also swim 
 * but it can inherit swim function from its parent where it will have to create another parent class 
 * like SwimmingFlyingBird which is not the good way everytime.
 * Above example can be improved by using Composition rather than using inheritance.
 */
