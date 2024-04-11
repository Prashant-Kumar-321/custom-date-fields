/* Classes Module arrow function => New features introduced in the JS*/

"use strict"; // Treat all JS code as newer version 

// alert("Hello"); // We are using node js , not browser 

let name = "prashant"; 
let age = 19; 
let duration = 20.98; 
let isLoggedIn = false; 


// number => 2^53 (max), 90, 28.9988  // 2^50 => 10^15(15 digits number)
// bigInt => uses(stock marketing application/trading app etc) 
// string => '',  "" 
// boolean => false/ture1
// null => standalone value / empty      (type)
// undefined =>  not assigned value yet 
// symbol => uniqueness / (figma , react)

// Object

// console.log(typeof isLoggedIn); 
// console.log(typeof null);
// console.log(typeof undefined);  

//  			Type
// null      => object 
// udefined  => undefined 

let debt = BigInt("965757698986768987"); // used when  bigger number is required in the application 
console.log(typeof debt); 
console.log("Debt = " + debt + " $");  
