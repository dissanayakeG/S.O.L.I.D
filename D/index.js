//Interface Segregation Principle

//The general idea of this principle is as simple as it is important: 
//High-level modules, which provide complex logic, should be easily reusable and unaffected by changes in low-level modules, 
//which provide utility features. To achieve that, you need to introduce an abstraction that decouples the high-level and low-level modules from each other.
//You should depend upon abstractions, not concertions

//Checkout.js
class Checkout {
    constructor() {
      this.paymentProcessor = new Stripe('USD');
    }
  
    makePayment(amount) {
      //Multiplying by 100 to get the cents
      this.paymentProcessor.createTransaction(amount * 100);
    }
  }
  
  //Stripe.js
  //Custom Stripe implementation that calls the Stripe API
  class Stripe {
    constructor(currency) {
      this.currency = currency;
    }
  
    createTransaction(amount) {
      /*Call the Stripe API methods*/
      console.log(`Payment made for $${amount / 100}`);
    }
  }