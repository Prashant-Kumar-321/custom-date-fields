// Animal abstract class 
class Animal{
    constructor(){
        if(new.target ===  Animal){
            throw new Error("Abstract class Animal cannot be instantiated"); 
        }
    }
    // These abstract class methods are intended to be implemented in sub classes 
    sound() {
        throw new Error("Must be implemented in sub classes"); 
    }

    eat(){
        throw new Error("Must be implemented in the Sub Classes"); 
    }

    move(){
        throw new Error("Must be implemented in the sub classes"); 
    }
}

// Concrete classes 
class Cat extends Animal{
    sound(){
        console.log("Meowwwww...!");
    }

    eat(){
        console.log("Cat is Eating..."); 
    }

    move(){
        console.log("Cat is Moving..."); 
    }
}

class Dog extends Animal{
    sound(){
        console.log("Bhawo Bhawo .... ");
    }
    eat(){
        console.log("Dog is Eating....."); 
    }

    move(){
        console.log("Dog is Moving..."); 
    }
}

// Trying to instantiate Animal class 
function main1(){
    try{
        const animal = new Animal; 
    }
    catch(error){
        console.log(error.message);
    }
}
main1(); 

// Instantiating sub classes 
function main2(){
    //  const cat = new Cat; 
    //  cat.sound(); 
    //  cat.eat(); 
    //  cat.move();
    //  const dog = new Dog; 
    //  dog.sound(); 
    //  dog.eat(); 
    //  dog.move();  

    let animal = new Dog; 
    animal.sound(); 
    animal = new Cat; 
    animal.sound(); 
}
main2(); 
 
