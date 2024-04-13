
// Dynamically Typed language

/* Note 

Primitive  (call by value)

	1. String
	2. Number 
	3. Boolean
	4. null
	5. undefifed 
	6. symbol
	7. BigInt
	
*/

// let score = 500; 
// let score:number = 500; // type script language 
// score = 3.87; 

let id = Symbol("123"); 
let anotherId = Symbol("123"); 
let anotherAnotherId = Symbol("123"); 
// console.log(id == anotherId); 
// console.log(id === anotherId);
// console.log(id == anotherId || id === anotherAnotherId); 

const bigNumber = 90890678768767867887899089778967n; 
// console.log(bigNumber); 

/*
Non-Primitive (object) || Reference Type (call by reference)
	1. Array
	2. Object
	3. Functions
*/

const fruits = ["Apple", "Orange", "Pineapple", "Guava"]; 

const Chair  = {
	company        : "cello",
	color          :"Brown", 
	hasHandSupport : true, 
	price          : 1349
}; 

const calculateBonus = function(){
	console.log("Bonus of customer has been calculated");
}; 

console.log(typeof(bigNumber)); 


/*  
	+--------------------------------+
	| Array      |   object          |   
	| Function   |   function object |    
	| Object     |   object          |
	| null       |   object          |
	| undefinded |   undefined       |
	+--------------------------------+

*/

