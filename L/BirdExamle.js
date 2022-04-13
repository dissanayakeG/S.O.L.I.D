//Liskov Substitution Principle
//if S is subtype of T, then objects of type T may be replaces with objects of type S
//Objects should be replaced with instances of their subclasses without altering the behavior
//Derived classes must be substitutable for their base classes. or All derivatives must conform to the behavior that clients expect of the base classes that they use. (Robert C. Martin)

class Bird {  
    fly(){
        //..
    }
}

class Eagle extends Bird {
    dive(){
        //..
    }
}

const eagle = new Eagle();
eagle.fly();
eagle.dive();

class Penguin extends Bird(){
   //Problem: Can't fly! 
}





