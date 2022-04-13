//Liskov Substitution Principle
//if S is subtype of T, then objects of type T may be replaces with objects of type S
//Objects should be replaced with instances of their subclasses without altering the behavior
//Derived classes must be substitutable for their base classes. or All derivatives must conform to the behavior that clients expect of the base classes that they use. (Robert C. Martin)

class Rectangle{
    constructor(width, height){
        this.width = width
        this.height=height
    }

    setWidth(width){
        this.width = width
    }

    setHeight(height){
        this.height=height
    }

    area(){
        return this.width * this.height
    }
}
class Square extends Rectangle{
    setWidth(width){
        this.width = width
        this.height = width
    }

    setHeight(height){
        this.width = height
        this.height = height
    }
}

function increaseRectangleWidth(rectangle){
    rectangle.setWidth(rectangle.width+1)
}

const rectangle1 = new Rectangle(10,2)
const rectangle2 = new Rectangle(5,5)// if this change to const square = new Square(5,5) exact output should return(30), But this return 36, this break Liskov Substitution Principle,

increaseRectangleWidth(rectangle1);
increaseRectangleWidth(rectangle2);

console.log(rectangle1.area())
console.log(rectangle2.area())





