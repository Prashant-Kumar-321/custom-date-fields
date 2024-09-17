/* SHOW CALENDAR */
const fromDateField = document.getElementById('from-date-field'); 
const toDateField = document.getElementById('to-date-field'); 
const taskTimeSpanField = document.querySelector('.task-time-span-field'); 

fromDateField.onclick = event => {

    if(taskTimeSpanField.classList.contains('to')){
        taskTimeSpanField.classList.toggle('show'); 
    } 

    taskTimeSpanField.classList.toggle('show'); 
    taskTimeSpanField.classList.remove('to'); 
    taskTimeSpanField.classList.toggle('from'); 
}

toDateField.onclick = event => {

    if(taskTimeSpanField.classList.contains('from')){
        taskTimeSpanField.classList.toggle('show'); 
    } 

    taskTimeSpanField.classList.toggle('show'); 
    taskTimeSpanField.classList.remove('from'); 
    taskTimeSpanField.classList.toggle('to'); 
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
            }
            day.onmouseup = event => {
                event.target.classList.remove('pressed'); 
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

let current_date = new Date(); 
let current_month = {"value": current_date.getMonth(),}; 
let current_year = {"value": current_date.getFullYear(),}; 
generateCalendar(current_month.value, current_year.value);
