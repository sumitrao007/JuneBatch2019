abstract class Shape
{
    constructor(){
        
    }
    abstract myarea():void;


}
class Circle extends Shape{
    radius:number;
    circlearea:number;
    constructor(radius:number){
        super();
        this.radius=radius;
        this.circlearea=0.0;
    }

    myarea(): void {
        this.circlearea=3.14*this.radius*this.radius;
    }

    displayInfo():void{
        console.log(`
        -----------------Circle Area---------------
        Radius is ${this.radius}
        Area is ${this.circlearea}
        ------------------------------------------
        `);
    }
    
}
class Rectangle extends Shape{
    length:number;
    breadth:number;
    rectarea:number;

    constructor(length:number,bradth:number){
        super();
        this.length=length;
        this.breadth=bradth;
    }
    
    myarea(): void {
        this.rectarea=this.length*this.breadth;
    }

    displayInfo():void{
        console.log(`
        -----------------Rectangle Area---------------
        Length is ${this.length}
        Breadth is ${this.breadth}
        Area is ${this.rectarea}
        ------------------------------------------
        `);
    }

} 

var circleobj=new Circle(2.5);
circleobj.myarea();
circleobj.displayInfo();

var rectobj=new Rectangle(5,6.5);
rectobj.myarea();
rectobj.displayInfo();

