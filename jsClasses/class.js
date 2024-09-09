"use strict"; 

class Car {
    constructor(name, year){
        this.name = name; 
        this.year = year; 
    }

    // Class Methods 
    age(){
        const date = new Date(); 
        return date.getFullYear() - this.year; 
    }

    age(currentYear){
        return currentYear - this.year; 
    }

    display(){
        console.log(`Name: ${this.name}, Year: ${this.year}`); 
    }
}; 

const date = new Date(); 

const audi = new Car("Audi", 2014); 
const bmw = new Car("BMW", 2016); 

// Accessing propertise of object 
// console.log(audi.name, audi.year);
console.log(`Age of Audi = ${audi.age(date.getFullYear())}`); 
console.log(`Age of BMW = ${bmw.age()}`); 
// audi.display(); 
// bmw.display();  