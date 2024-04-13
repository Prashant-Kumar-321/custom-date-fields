"use strict"; // Use ESC6 version of JS 

let value = 13; 
let negValue = 1; 
// negValue = -value; 
// negValue *= -1;  // negValue = negValue * -1; 

// console.log(negValue); 

// ********************* Arithtmetic Operation ************************ 
// console.log(2 + 5); 
// console.log(1.20 - 1); // output = 0.199999999999999996
// console.log(-3 * -7); 
// console.log(-5 / -4);
// console.log(2 ** 2); // 2 ^ 2 = 4      // New 
// console.log(40098 % 10); // last digit 

// const newNum = Math.floor(298/10); // Remove the last digit 
// console.log(newNum); 

let str1 = 'Hello'; 
let str2 = " Prashant"; 

let str3 = str1 + str2; // Hello Prashant
// console.log(str3); 

// console.log("1" + 2);      // 12
// console.log(1 + "2");      // 12
// console.log(2 + 3 + "1");  // 51

let life = 10; 
// --life; 
// life--; 
// console.log(life--); 
// console.log(life); 

// let points = 0; 
// console.log(++points); 
// console.log(points++); 
// console.log(points); 


let credit = 40; 
credit -= 10;
credit += 100; 
credit *= 10;
credit /= 100;  // 13 
credit %= 10; 	// 3 

let energy = 4; 
energy **= 2; // 4^2

// console.log(credit, energy); 

// ************************  Ternary operator  **********************************
// (A) ? B : C 
// if A then B  else C  

let ramHeight = 39, shyamHeight = 20; 
(ramHeight > shyamHeight) ? console.log("Ram is taller than shyam ") : console.log("Shyam is taller than Ram"); 