class Monstar {
    constructor(name) {
        this.name = name;
    }

    attack() {
        console.log(`${this.name} attacked`)
    }

    walk() {
        console.log(`${this.name} walked`)
    }
}

class FlyingMonstar extends Monstar {
    fly() {
        console.log(`${this.name} flew`);
    }
}

class SwimmingMonster extends Monstar {
    swim() {
        console.log(`${this.name} swam`)
    }
}

const bear = new Monstar('bear');
bear.walk();
bear.attack();

const eagle = new FlyingMonstar('eagle');
eagle.walk();
eagle.attack();
eagle.fly();

const shark = new SwimmingMonster('shark');
shark.attack();
shark.walk();
shark.swim();

/**
 * Above example works fine until someone asks to ctreate new monstar which can fly and swim
 * In that case if we create new class FlyingSwimmingMonstar then will have to duplicate 
 * fly() and swim() logic into that. We can apply certain logic to shift fly and swim logic to 
 * their parent Monstar class but still creating FlyingSwimmingMonstar would not be a better soln
 * here. This is where Composition comes in role. 
 */