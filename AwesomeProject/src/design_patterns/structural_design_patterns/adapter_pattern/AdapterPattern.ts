/*
   - The Adapter acts as a wrapper between two objects

   - The Adapter Design Pattern is a structural design pattern that allows incompatible interfaces to work together.

   Consists of :
            1. Target class or interface  (this is class thats used by client currently)
            2. Adaptee class or interface  (this is the new class to whcih we want to adapt to)
            3. Adapter class  (This is the final class client will use ) (adapter wraps adaptee)

*/

// this is the target Interface : client understands this interface only
interface PaymentProcessor {
    processPayment(amount: number): void;
}

// this is the class used by client code(this is also a target class)
class PayPalProcessor implements PaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing payment of $${amount} via PayPal.`);
    }
}


// now this is new class and should be used in old client class PayPalProcessor but client only understands PaymentProcessor
class StripeProcessor { // this is called adaptee as well
    makePayment(amount: number): void {
        console.log(`Processing payment of $${amount} via Stripe.`);
    }
}

// hence we make adapter which implements old interface PaymentProcessor because client understands PaymentProcessor interface only
class StripeProcessorAdapter implements PaymentProcessor { // this is adapter
    private stripeProcessor: StripeProcessor;  

    constructor(stripeProcessor: StripeProcessor) {
        this.stripeProcessor = stripeProcessor;  // and we pass new class to the adapter while creating instance
    }

    processPayment(amount: number): void {
        this.stripeProcessor.makePayment(amount);
    }
}


function main() {
    // Using PayPal
    const paypal: PaymentProcessor = new PayPalProcessor();
    paypal.processPayment(100);

    // Using Stripe through the adapter
    const stripe: PaymentProcessor = new StripeProcessorAdapter(new StripeProcessor());
    stripe.processPayment(200);
}

main();