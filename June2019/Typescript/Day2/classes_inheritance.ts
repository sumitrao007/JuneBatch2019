class shape{
   
    disp():void{
        console.log("U R In Shape Class");
    }
}

class Circle extends shape{
  
    disp_Circle():void{
        console.log("U R In Circle Class");
    } 

}
class Rectangle extends Circle {
  
    disp_Rectangle():void{
        console.log("U R In Rectangle Class");
    } 

}



var shapeclass=new shape();
//shapeclass.disp();

var Circleclass=new Circle();
//Circleclass.disp_Circle();
//Circleclass.disp();


var Rectangleclass=new Rectangle();
Rectangleclass.disp_Rectangle();
Rectangleclass.disp();
Rectangleclass.disp_Circle();
