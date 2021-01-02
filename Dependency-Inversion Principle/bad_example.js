class Store {
    constructor(user) {
        this.stripe = new Stripe(user);
    }

    purchaseBike(quantity) {
        this.stripe.makePayment(200 * quantity * 100);
    }

    purchaseHelmet(quantity) {
        this.stripe.makePayment(15 * quantity * 100);
    }
}

class Stripe {
    constructor(user) {
        this.user = user
    }

    makePayment(amountInCents) {
        console.log(`${this.user} made payment of $${amountInCents / 100} with Stripe`);
    }
}

const store = new Store('John');
store.purchaseBike(2);
store.purchaseHelmet(2);

/**
 * The Problem with above solution is Store class is directly dependent on
 * the Stripe class and which is worry. If going ahead we want to use another payment api
 * or replace stripe with new api then it would be difficult to have that due 
 * to Store class is tightly coupled with Stripe class which should not be the case.
 * Single Api integration change would cause change in all the places in Store class
 */

