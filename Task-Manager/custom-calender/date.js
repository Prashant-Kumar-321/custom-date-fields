// let monthIndex = 8, year = 2024; 
// let date = new Date(year, monthIndex, 1); 

// console.log(date.getDay()); // what was the day of the week on that date

// let date1 = new Date(2024, 8, 1); 
// let date2 = new Date(2024, 8, 1); 
// console.log(date1); 
// console.log(date2); 
// console.log(!(date1 > date2) && !(date1 < date2)); // Equality 

const isToday = (year, month, date) => {
    let currDate = new Date(); 
    currDate = new Date(currDate.getFullYear(), currDate.getMonth(), currDate.getDate()); // Not worring about the specific time

    let givenDate = new Date(year, month, date); 

    return !(givenDate < currDate) && !(givenDate > currDate); 
}

console.log(isToday(2024, 8, 14)); 
