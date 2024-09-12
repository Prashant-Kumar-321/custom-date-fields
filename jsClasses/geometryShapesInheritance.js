// Base class 
class Shape {
    constructor(color, x, y){
        this.color = color; 
        this.x = x; 
        this.y = y; 
    }

    move(x, y) {
        this.x = x; 
        this.y = y; 
        console.log(`Moved to ${this.x}, ${this.y}`); 
    }

    scale(factor){
        console.log(`Scaled ${factor} times`); 
    }
}

class Circle extends Shape{
    constructor(color, x, y, radius){
        super(color, x, y); 
        this.radius = radius; 
    }

    calculateArea(){
        console.log('Area of Circle Calculated'); 
    }

    calculateCircumference(){
        console.log('Circumference of Circle Calculateds');
    }
}

class Rectangle extends Shape{
    constructor(color, x, y, width, height){
        super(color, x, y); 
        this.width = width; 
        this.height = height; 
    }

    calculateArea(){
        console.log('Area of Rectangle calculatded'); 
    }

    calculatePerimeter(){
        console.log('Perimeter of Rectangle Calculated'); 
    }
}

class Triangle extends Shape{
    constructor(color, x, y, s1, s2, s3){
        super(color, x, y); 
        this.a = s1, this.b = s2, this.c = s3; 
    }

    calculateArea(){
        console.log('Area of Triangle Calculated');
    }

    calculatePerimeter(){
        console.log('Perimeter of Triangle Calculated');
    }
}

// Driver Function 
function main(){
    const triangle = new Triangle('Yellow', 110, 230, 3, 4, 7); 
    // triangle.scale(1.5); 
    // triangle.move(100, 100); 
    // triangle.calculateArea(); 
    // triangle.calculatePerimeter(); 
    const rect = new Rectangle('Purple', 38, 50, 234, 200); 
    // rect.calculateArea(); 
    // rect.move(45, 76); 
    // console.log(rect.width);
    // console.log(rect.height);

    const circle = new Circle('Pink', 20, 48, 21); 
    circle.calculateArea(); 
}



main(); 

