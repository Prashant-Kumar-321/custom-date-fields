"use strict"; 

let fullName = "RAHUL"; 

// console.log(fullName[0]); 
// for(let i=0; i<fullName.length; ++i){
//     console.log(fullName[i]); 
// }

// console.log(`Number of chracter${fullName.length>1?'s':''} in the string = ${fullName.length}`); 

// console.log(fullName.charAt(2));
// console.log(fullName.charCodeAt(2)); 

function charAndCode(str){
    for(let i=0; i<str.length; ++i){
        console.log(`${str.charAt(i)} = ${str.charCodeAt(i)}`); 
    }
}
// charAndCode(fullName); 

// index of first and last occurance of substring 
// let choice = "abghcdabdef"; 
// console.log(choice.indexOf("gh")); 
// console.log(choice.lastIndexOf("gh")); 

let dateStr = "22/09/2024";
let dateComponents = dateStr.split('/'); 
let  dateObj = {};   
dateComponents.forEach((comp, idx)=>{
    if(idx === 0){
        dateObj['day'] = comp; 
    }
    else if(idx === 1){
        dateObj['month'] = comp; 
    }
    else{
        dateObj['year'] = comp; 
    }
}); 
// console.log(dateObj); 

let url = 'https://www.apigoogle.com/route/?origin=ranchi&destination=khunti&trafic=no';

let urlComps = url.split('?'); // array of endpoint and parameter
// let endPoint = urlComps[0]; 
// let parameter = urlComps[1]; 
// console.log(endPoint); 
// console.log(parameter); 

// let parameters = parameter.split('&');
// console.log(parameters);
// let parameterObj = {};
// parameters.forEach(parVal => {
//     let tem = parVal.split('=');
//     parameterObj[`${tem[0]}`] = tem[1];  
// });

// console.log(parameterObj); 

// let str = new String('He am good and am health.'); 
// let newStr = str.replace('am', 'is'); 
// // Needs answer: How to replace all searchString
// console.log(str); 
// console.log(newStr); 


// let userName = "  rahul@7658   ";
// console.log(userName + "extra spaces");  
// userName = userName.trimStart(); 
// console.log(userName + "extra spaces");
// userName = userName.trimEnd(); 
// console.log(userName + 'Extras Spaces'); 
// userName = userName.trim(); 
// console.log(userName + "Trailing White Spaces"); 

let s1 = "Prashant"; 
let s2 = "Kumar Gupta"; 
let resStr = s1 + " " + s2; 
console.log(resStr); 

let address = "";
console.log(address.length === 0? 'Empty': address); 
// address = address + "Vill-Ganaloya";
// address += "Vill-Ganaloya"; 
// address += " PO+PS=Murhu"; 
// address += " Dist-Khunti";   
// console.log(address);

// let hexColorCode = ""; 
// hexColorCode = hexColorCode.concat("#"); 
// console.log(`Hex Color Code = ${hexColorCode}`); 

let str = "I am the Best";
let substr = str.slice(2); 
console.log(str); 
console.log(substr); 