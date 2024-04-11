/* Conversion Operations */
"use strict"; 

// Type casting == Data type conversion 
// ******************** To Number *****************************************
let score = "876";  

// console.log(typeof score);  // sizeof variableName || type  ==>  C++
// console.log(typeof(score)); // sizefof(variableName || Type)

let scoreNumber = Number(score); 

// console.log(typeof scoreNumber); 
// console.log(scoreNumber);

// if(Number.isNaN(scoreNumber)) console.log("Not a Number"); 
// else console.log("A Number"); 

// Another Type  => number 
// "9877"        => 9877
// ""            => 0
// null          => 0
// flase         => 0; 
// true          => 1 
// "prashant"    => NaN (not a number)
// undfined      => NaN

score = undefined; 
scoreNumber = Number(score); 

// console.log(typeof(scoreNumber)); 
// console.log(scoreNumber); 

// ********************* To Boolean ********************************************

let order = " "; 
let isOrder = Boolean(order); 

// console.log(typeof isOrder); 
// console.log(isOrder); 

// Another Type          ===> Boolean
// 9, -2 / "prashant"    ==> true; 
// 0  / ""               ==> false; 
// null                  ==> false; 
// undefined              ==> false; 


// *********************************** To String ************************************

const price = 0.00009800078; 
let stringPrice = String(true); 

// if(stringPrice === "true"){
// 	console.log("stringPrice has value = true"); 
// 	console.log(stringPrice.charAt(0)); 
// }else{
// 	console.log("stringPrice doesn't have value = true"); 
// }

console.log(typeof stringPrice); 
console.log(stringPrice); 

// Another Type   ==> String 
// 1. 89767       ==> "89767"
// 2. 90.99987    ==> "90.9987" 
// 3. null        ==> null 
// 4. undefined   ==> undefined 
// 5. true/false  ==> 


// NaN checking 
let pages = 499;
page = NaN;  
console.log("Pages is " + (Number.isNaN(pages) ? "Not a Number ": "is a Number"));  