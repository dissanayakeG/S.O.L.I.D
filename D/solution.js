class Checkout {
  constructor(paymentProcessor) {
    this.paymentProcessor = paymentProcessor;
  }

  makePayment(amount) {
    this.paymentProcessor.createPaymentIntent(amount);
  }
}

//PaymentProcessor.js
class PaymentProcessor {
  constructor(processor, currency) {
    this.processor = processor;
    this.currency = currency;
  }

  createPaymentIntent(amount) {
    this.processor.createTransaction(amount, this.currency);
  }
}

//BetterProcessor.js
class BetterProcessor {
  createTransaction(amount, currency) {
    console.log(`Payment made for ${amount} ${currency}`);
  }
}

//index.js
const paymentProcessor = new PaymentProcessor(new BetterProcessor(), 'USD');
const checkout = new Checkout(paymentProcessor);

//Notice how we only changed the processor passed to the PaymentProcessor class
//and how the Checkout class remained untouched. We adapted the intermediary class PaymentProcessor to the processor needs.

//We removed the dependency between Checkout and the processor used by implementing the intermediary class PaymentProcessor, following the Dependency Inversion Principle.