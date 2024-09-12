class Car {
    // Static properties ~= Class Properties 
     static #staticProperty = 'This is static Property'; 
    
    // Private Instance properties 
    #carname; // enclosing class 

    // Setter and Getter 
    get carname(){
        return this.#carname; 
    }

    set carname(carname){
        this.#carname = carname; 
    }

    constructor(brand){
        this.#carname = brand; 
    }

    #privateMethod(){
        console.log('This is private Method'); 
    }

    present(){
        this.#privateMethod(); 
        console.log(this.#staticProperty); 
        return `I have a ${this.#carname}`; 
    }

    static hello(myCar){
        console.log('Hello '+ myCar.#carname);
    }
}

class StaticClass{
    static staticField0 = 'Some Value'; 
    static staticField1;
    
    // Class Static Initialization block
    // Executed when Class is Loaded
    static{
        StaticClass.staticField1 = 'Initialize Uninitialized Field'; 
        console.log('Class static Initialization block is called.'); 
    }

    static staticMethod(){
        console.log('Static Method is called.');
    }
}


function main(){
    // const myCar = new Car('Farari');
    // console.log(myCar.#carname);  // error of accessing private properties of class 
    // console.log(myCar.carname);  
    // console.log(myCar.present());
    // Car.hello(myCar);
    // Car.staticProperty = 'Static Property has been updated';
    // console.log(Car.#staticProperty);
    // console.log(myCar.staticProperty); // undefined
    // console.log(myCar.present());  

    console.log(StaticClass.staticField0, ', ', StaticClass.staticField1); 
    StaticClass.staticMethod();  
}

main(); 