/* DARK MODE */
document.querySelector('.dark-mode-switch-ident').onclick = event => {
    const body = document.querySelector('body'); 
    body.classList.toggle('light'); 
    body.classList.toggle('dark'); 
}

// CHECK LEAP YEAR 
const isLeapYear = year => {
    return (year % 100 !== 0 && year % 4 === 0) || (year % 400 === 0); 
}

const getFebDays = year => {
    return isLeapYear(year)? 29: 28; 
}

const isToday = (year, month, date) => {
    let currDate = new Date(); 
    currDate = new Date(currDate.getFullYear(), currDate.getMonth(), currDate.getDate()); // Not worring about the specific time 
    const givenDate = new Date(year, month, date); 
    return !(givenDate < currDate) && !(givenDate > currDate); 
}


const calender = document.querySelector('.calender'); 

const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; 

const month_picker = document.querySelector('#month-picker'); 
const calender_header_year = document.querySelector('#year');
/* GENERATE CALENDER */
const generateCalendar = (month, year) => {
 

    const calender_days = document.querySelector('.calender-days');
    calender_days.innerHTML = '';  // Getting rid of previous days 

    const days_in_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    const givenDate = new Date(year, month, 1); 
    const day_of_week = givenDate.getDay(); 

    calender_header_year.innerHTML = year; 
    month_picker.innerHTML =  month_names[month]; 

    // Generate days of the month  
    for(let i=0; i<= days_in_month[month]+day_of_week-1; ++i){
        const day = document.createElement('div'); 
        let date = i - day_of_week + 1; 
        if(i >= day_of_week){
            day.classList.add('calender-day-hover'); 
            day.innerHTML = date; 
            day.innerHTML += `<span></span>
                              <span></span>
                              <span></span>
                              <span></span>`
            if(isToday(year, month, date)){
                day.classList.add('curr-date'); 
                day.classList.remove('calender-day-hover'); 
            }

        }
        calender_days.appendChild(day); 
    }

}

// GENERATE CALENDER FOR CURRENT MONTH AND YEAR 
const currDate = new Date(); 
const currYear = {value: currDate.getFullYear()}; 
const currMonth = {value: currDate.getMonth()}; 

generateCalendar(currMonth.value, currYear.value); 

/* YEAR CHANGE */
const preYear = document.querySelector('#prev-year'); 
const nextYear = document.querySelector('#next-year'); 
const year = document.querySelector('#year'); 

const regenerateDays = (year) => {
    const monthIndex = month_names.findIndex(month => month === month_picker.innerHTML); 
    generateCalendar(monthIndex, year); 
}

preYear.onclick = event => {
    const yearNumber = Number(year.innerHTML); 
    year.innerHTML = yearNumber-1;
    regenerateDays(yearNumber-1); 
}
nextYear.onclick = event => {
    const yearNumber = Number(year.innerHTML); 
    year.innerHTML = yearNumber+1;
    regenerateDays(yearNumber+1); 
}


// MONTH LIST 
const months_list = document.querySelector('.month-list'); 
month_names.forEach(month => {
    const mnth = document.createElement('div'); 
    mnth.innerHTML = `<div>${month}</div>`; 
    mnth.classList.add('month'); 
    months_list.appendChild(mnth);
    
    // ADD EVENT LISTENER 
    mnth.onclick = event => {
        months_list.classList.remove('show'); 
        month_picker.textContent = event.target.textContent; 
        const monthIndex = month_names.findIndex(month => month === event.target.textContent); 
        const year = Number(calender_header_year.textContent); 
        generateCalendar(monthIndex, year); 
    }
}); 

month_picker.onclick = event => {
    months_list.classList.toggle('show'); 
}



/* WINDOW RESIZE */
let windowSize = window.innerWidth; 
window.addEventListener('resize', event => {
    windowSize = window.innerWidth; 
    if(windowSize <= 620){
        callback(); 
    }
}); 

function callback(){
    console.log(`You have resized your screen and Now your screen size is ${windowSize}`);
}

// I want this to be executed when page is loaded for the first time from server in the user's device

