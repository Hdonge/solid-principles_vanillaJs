/*
 *High-level modules should not depend on low-level modules.  Both should depend on abstractions. 
 *Abstractions should not depend on details.  Details should depend on abstractions.
 */

class Store {
    constructor(paymentProcessor) {
        this.paymentProcessor = paymentProcessor;
    }

    purchaseBike(quantity) {
        this.paymentProcessor.pay(200 * quantity);
    }

    purchaseHelmet(quantity) {
        this.paymentProcessor.pay(15 * quantity);
    }
}

//Stripe Payment gateway
class StripePaymentProcessor {
    constructor(user) {
        this.stripe = new Stripe(user)
    }

    pay(amountInDollars) {
        this.stripe.makePayment(amountInDollars * 100);
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

//Paypal payment gateway
class PaypalPaymentProcessor {
    constructor(user) {
        this.user = user;
        this.paypal = new Paypal();
    }

    pay(amountInDollars) {
        this.paypal.makePayment(this.user, amountInDollars);
    }
}

class Paypal {
    makePayment(user, amountInDollars) {
        console.log(`${user} made payment of $${amountInDollars} with Paypal`);
    }
}

const store1 = new Store(new StripePaymentProcessor('John'));
store1.purchaseBike(2);
store1.purchaseHelmet(2);

const store2 = new Store(new PaypalPaymentProcessor('Mark'));
store2.purchaseHelmet(3);
store2.purchaseBike(3);

/**
 * Now we have inverted the dependency of Store class from Stripe class
 * and passing the dependency as parameter through some diffrent interface. By usng this principle we can easily
 * integrate new payment gateway with it.
 */

//Integrate new AmericanExpress Payment gateway
class AmericanExpress {
    constructor(user) {
        this.user = user
    }

    makePayment(amountInDollars) {
        console.log(`${this.user} made payment of $${amountInDollars} with American Express`);
    }
}

class AmericanExpressPaymentProcessor { 
    constructor(user) {
        this.americanExpress = new AmericanExpress(user)
    }

    pay(amountInDollars) {
        this.americanExpress.makePayment(amountInDollars);
    }
}

const store3 = new Store(new AmericanExpressPaymentProcessor('Harry'));
store3.purchaseHelmet(1);
store3.purchaseBike(1);


/**
 * New Api got eaily integrated without adding any complexity in store class
 * This is called dependency inversion Principle.
 */
