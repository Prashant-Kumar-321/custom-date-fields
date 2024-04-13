"use strict"; 

// console.log( 132 > 9);  // True
// console.log( 9 < 3);    // False
// console.log(10 >= 10);  // True 
// console.log(9 <= 10);   // True
// console.log("abc" == "abc"); 
// console.log("A" < "B"); 
// console.log("D" > "B"); 

console.log(3 > 0 || 9 < 3);
console.log(12 >= 12 && 13 <= 89);
console.log(!(4 != 3))
console.log(!2);  



// Important Note: 
// 				Make sure data type of both operands is same before making comparision
// Rule: Always check both operand are of the same type 


// ****************************** Danger code situation *********************************

// Equality check == and comparision checks >, <, >=, <= work differently
// Comparisions convert [null] to a number(0), on the other hand equality not 
// null == 0 ; ==> false 
// null >= 0;  ==> true

// Never let your code face this sitaution 
// console.log("2" > 1); 
// console.log("" < -8);
// console.log("009" < 25);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined >= 0); 

// ********************** Strict Check ****************************
// === 
// console.log("2" === 2); 