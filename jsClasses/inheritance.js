"use strict"; 

class Car {
    constructor(brand) {
        this._carname = brand; 
    }

    // Getter and Setter method for carname 
    get carname(){
        return this._carname; 
    }
    set carname(newName){
        this._carname = newName; 
    }

    present(){
        return `I have a ${this._carname}`; 
    }
}

class Model extends Car{
    constructor(brand, model){
        super(brand); // super method refers to the parent class 
        this.model = model; 
    }
    show(){
        return `${this.present()}, It is a ${this.model}`; 
    }
}

function main(){
    const myCar = new Model("Ford", "Mustang");
    myCar.carname = "BMW"; 
    console.log(myCar.carname);  
    console.log(myCar.show()); 
}


main(); 