/* 
	Investigation Study 
*/

const accountId = 100; 
let accountEmail = "pk@google.com"; 
var accountPassword = "987UI@pk"; // We don't use var now  // Bad practice // global scope
acountCity = "Ranchi";            // not good  Bad practice 
let accountState;  // Doesn't matter  if you add ; or not 

/* 
	Perfer not to use var 
	because of issue in block  scope and function scope 
*/

// accountId = 200; // Not modifiable  
accountEmail = "pk@87gmail.com"; 
accountPassword = "hello9087"; 
accountCity = "Chennai"; 

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]); 



// ***************************** variable declartion ****************************************
// Only use this to declare variable 
const productId = 30098; 
let projectCategory = "Jeans"; 
let size = 32; 
let brand; 
