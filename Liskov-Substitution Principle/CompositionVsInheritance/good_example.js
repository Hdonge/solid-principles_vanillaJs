/**
 * Composition advantanges over inheritance
 */

function swimmer({ name }) {
    return {
        swim: () => console.log(`${name} swam`)
    }
}

function flyer({ name }) {
    return {
        fly: () => console.log(`${name} flew`)
    }
}

function attackerAndWalker({ name }) {
    return {
        attack: () => console.log(`${name} attacked`),
        walk: () => console.log(`${name} walked`)
    }
}

function swimmingMonsterCreator(name) {
    const monster = { name: name };

    return {
        ...monster,
        ...attackerAndWalker(monster),
        ...swimmer(monster)
    }
}

function flyingSwimmingMonsterCreator(name) {
    const monster = { name: name };

    return {
        ...monster,
        ...attackerAndWalker(monster),
        ...swimmer(monster),
        ...flyer(monster)
    }
}


const monster = swimmingMonsterCreator('Monster');
monster.walk();
monster.attack();
monster.swim();

const dragon = flyingSwimmingMonsterCreator('dragon');
dragon.attack();
dragon.walk();
dragon.swim();
dragon.fly();

/**
 * Now using above composition exmaple we can create any monster with any combination we want.
 * We can create tons of composible objects using this technique.
 */