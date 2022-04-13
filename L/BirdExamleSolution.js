class Bird {
    layEgg () {}
  }
  
  class FlyingBird {
    fly () {}
  }
  
  class SwimmingBird extends Bird {
    swim () {}
  }
  
  class Eagle extends FlyingBird {}
  
  class Penguin extends SwimmingBird {}
  
  const penguin = new Penguin();
  penguin.swim();
  penguin.layEgg();
  
  const eagle = new Eagle();
  eagle.fly();
  eagle.layEgg();




