
/* YEAR CHANGE */
const prevYr = document.getElementById('prev-year'); 
const nextYr = document.getElementById('next-year');
const monthPicker = document.querySelector('.month-picker'); 
const yearPicker  = document.querySelector('.year-picker'); 

/* Global variable for date */
let current_date = new Date(); 
let current_month = {"value": current_date.getMonth(),}; 
let current_year = {"value": current_date.getFullYear(),};

const monthList = document.querySelector('.month-list'); 

/* DATE INPUT FIELD */
const fromDate = document.getElementById('fromDate'); 
const toDate = document.getElementById('toDate'); 

/* SHOW CALENDAR */
const fromDateField = document.getElementById('from-date-field'); 
const toDateField = document.getElementById('to-date-field'); 
const taskTimeSpanField = document.querySelector('.task-time-span-field'); 

fromDateField.onclick = event => {
    if(taskTimeSpanField.classList.contains('to')){
        taskTimeSpanField.classList.toggle('show'); // remove show class 
    } 

    taskTimeSpanField.classList.toggle('show'); 
    taskTimeSpanField.classList.remove('to'); 
    taskTimeSpanField.classList.toggle('from'); 

    /* Positioning to left */
    const calendar = document.querySelector('.calendar');
    calendar.style.left =  0; 
    calendar.style.right = '';
}

toDateField.onclick = event => {
    if(taskTimeSpanField.classList.contains('from')){
        taskTimeSpanField.classList.toggle('show'); 
    } 

    taskTimeSpanField.classList.toggle('show'); 
    taskTimeSpanField.classList.remove('from'); 
    taskTimeSpanField.classList.toggle('to'); 

    /* Positioning to right */
    const calendar = document.querySelector('.calendar'); 
    calendar.style.left = ''; 
    calendar.style.right = 0; 
}

/* GENERATE CALENDER */
const days = document.querySelector('.days'); 

const isLeapYear = year => year % 100 !== 0 && year % 4 === 0 || year % 400 === 0; 
const getFebdays = year => isLeapYear(year) ? 29: 28; 

const months_name = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; 

const isToday = (date, month, year) => {
    let today = new Date(); 
    return (today.getFullYear() === year && today.getMonth() === month && date === today.getDate()); 
}

function format(num){
    return num.toString().padStart(2, '0'); 
}

const generateDays = (month, year, first_day_of_week) => {
    const days_in_month = [31, getFebdays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    days.innerHTML = ''; // Removing previous days entirely 

    for(let i=0; i<= days_in_month[month]+first_day_of_week - 1; ++i){
        const day = document.createElement('div'); 
        if(i >= first_day_of_week){ // i = date part of current month 
            const date = i - first_day_of_week + 1; 
            day.innerHTML = date; 
            day.classList.add('day'); 

            // ADD PRESSED EVENT HANDLER 
            day.onmousedown = event => {
                event.target.classList.add('pressed');

                // Add date to input field 
                const fromTimeStamp = taskTimeSpanField.classList.contains('from') ? true: false;  
                const year = yearPicker.innerHTML; 
                const month = current_month.value+1;
                const fullDate = `${format(date)}/${format(month)}/${year}`; 
                if(fromTimeStamp){
                    fromDate.value = fullDate; 
                }else{
                    toDate.value = fullDate; 
                }
            }

            day.onmouseup = event => {
                event.target.classList.remove('pressed');
                // Close calendar
                taskTimeSpanField.classList.remove('show'); 
            }
        }

        days.appendChild(day); 
    }
}

const generateCalendar = (month, year) => {
    // day of week on 1st of month in that year 
    const first_day_of_week = new Date(year, month, 1).getDay(); // [sun - sat] = [0, 6]

    // generate days of month 
    generateDays(month, year, first_day_of_week); 
}

/* GENERATE CALENDER ENDS HERE ...................... */
generateCalendar(current_month.value, current_year.value);

/* YEAR CHANGE */
let intervalId = null; 

const updateYear = (opr) => {
    if(opr === 'INCREMENT')
        current_year.value++;
    else
        current_year.value--;

    generateCalendar(current_month.value, current_year.value); 
    if(current_year.value < 0){
        yearPicker.innerHTML = `${Math.abs(current_year.value)} BC`; 
    }
    else{
        yearPicker.innerHTML = current_year.value;  
    }
}

prevYr.onmousedown = e => {
    updateYear('DECREMENT')
    intervalId = setInterval(() => {
        updateYear('DECREMENT'); 
    }, 300);
}

prevYr.onmouseup = e => {
    clearInterval(intervalId); 
    intervalId = null; 
}

nextYr.onmousedown = e => {
    updateYear('INCREMENT'); 
    intervalId = setInterval(()=>{
        updateYear('INCREMENT'); 
    }, 300);  
}

nextYr.onmouseup = e => {
   clearInterval(intervalId);
   intervalId = null; 
}

/* YEAR CHANGE ENDS HERE.......................... */

/* MONTH CHANGE */

// Creating Month list

months_name.forEach((month, index) => {
    const monthDiv = document.createElement('div'); 
    monthDiv.innerHTML = `<div>${month} </div>`;
    monthDiv.classList.add('month'); 
    
    monthList.appendChild(monthDiv);
    
    // add an on click event listener 
    monthDiv.onclick = e => {
        monthList.classList.remove('show'); 

        monthPicker.innerHTML = month;
        current_month.value = index; 
        generateCalendar(index, current_year.value); 
    }
}); 

monthPicker.onclick = e => {
    monthList.classList.add('show'); 
}
