"use strict"; 

const firstName = "Prashant";
const lastName = new String("Kumar"); 
const currAge = 20; 
/*	
	 P   R   A   S   H   A   N   T
	 0   1   2   3   4   5   6   7	 
*/


// console.log(firstName); 
// console.log(typeof firstName); 

// console.log(lastName); 
// console.log(typeof lastName); // object

// console.log(`My full name is ${firstName} ${lastName}. I am ${currAge} years old. `);   // String Interpolation


// let typeOfLastName = typeof lastName; 
// console.log(typeOfLastName); // object
// console.log(typeOfLastName); // object

// *********** Ways to check if two variable are of same type ****************
let number = 12; 
let string = "string"; 
// (typeof(number) == typeof(string)) ? console.log("Type are equal"): console.log("Type are not equal"); 


// ************************** Different Methods of string *************************
let str1 = new String("Prashant Kumar Gupta-traveller");
const size = str1.length; 
// console.log(`Length of string = ${size}`);

// console.log(str1[size-1]); // Read only property 
// console.log(str1.charAt(0)); 
// console.log("Character Unicode = " + str1.charCodeAt(0)); // ASCII CODE 

// for(let i=0; i<size; ++i){
// 	console.log(`${str1[i]} = ${str1.charCodeAt(i)}`); 
// }                                                                                                                 

// console.log(str1.indexOf("a"));			 // first occurence
// console.log(str1.lastIndexOf("KumAr")); 	 // return last occurence of search string 


let url = "f:/Project/Image/bubble.png"; 
// console.log(url.split('/', 2));
url = new String("https:/www.google.com/prashant%20krimage");
// console.log(url.replace("%20", " ")); 

let hobby = "       Reading Book         \n";
// console.log(hobby + "Extra string");  
// console.log(hobby.trim() + "Extra string");  // removing leading and trailing whitespaces and line terminator
// console.log(hobby.trimStart() + "Extra string");  // removing leading and trailing whitespaces and line terminator
// console.log(hobby.trimEnd() + "Extra string");  // removing leading and trailing whitespaces and line terminator

let s1 = "com", s2 = "puter"; 
// s1 += s2; 
// s1 = s1+s2; 
s1 = s1.concat(s2); // computer 
// console.log(s1.toUpperCase());  
// console.log(s1.toLowerCase());  
// console.log(s1.substring(2)); 
// console.log(s1.slice(2, (2+3))); // [sI, eI), [sI, (sI+len))
console.log(s1.slice(-s1.length)); 

let primStr = "Traveller"; 
// console.log(primStr.length); 
