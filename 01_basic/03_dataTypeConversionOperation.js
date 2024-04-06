/* Conversion Operations */

"use strict"; 


// ******************** To Number *****************************************
let score = "876";  

// console.log(typeof score);
// console.log(typeof(score)); 

let scoreNumber = Number(score); 

// console.log(typeof scoreNumber); 
// console.log(scoreNumber);

// if(Number.isNaN(scoreNumber)) console.log("Not a Number"); 
// else console.log("A Number"); 

// another => number 
// "9877" => 9877
// ""  => 0
// null => 0
// flase => 0; true => 1 
// "prashant" => NaN (not a number) 
// undfined => NaN

score = undefined; 
scoreNumber = Number(score); 

// console.log(typeof(scoreNumber)); 
// console.log(scoreNumber); 

// ********************* To Boolean ********************************************

let order = " "; 
let isOrder = Boolean(order); 

// console.log(typeof isOrder); 
// console.log(isOrder); 

// Non-Zero / "prashant" ==> true; 
// Zero  / ""  ==> false; 
// null ==> false; 
// undefine => false; 


// *********************************** To String ************************************

const price = 0.00009800078; 
let stringPrice = String(price); 

console.log(typeof stringPrice); 
console.log(stringPrice); 