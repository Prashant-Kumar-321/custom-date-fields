"use strict"; 

class Comment{
    constructor(user_id, post_id, content, time, date){
        this.user_id = user_id; 
        this.post_id = post_id; 
        this.content = content; 
        this.time = time; 
        this.date = date; 
    }

    date_diff_indays (date1, date2) {
        const dt1 = new Date(date1), dt2 = new Date(date2);
    
        // Convert Date into Elapsed millisecond since 1 Jan 1970 
        const dt1MiSec = Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()); 
        const dt2MiSec = Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()); 
        const millisecondInDay = 1000 * 24 * 60 * 60; 
    
        // Calculate the difference in days between the two dates
        return Math.floor(((dt2MiSec - dt1MiSec) / millisecondInDay));
    }

    getSeconds(timeComponents){
        let seconds = 0; 
        let multiplicativeFactor = 3600; // seconds in one hour  
        timeComponents.forEach((timeComp) => {
            seconds += Number(timeComp) * multiplicativeFactor; 
            multiplicativeFactor /= 60; 
        });
        return seconds; 
    }
    
    // Function calcualte time difference between tow given timestamp 
    time_diff(time1, time2) {
        const t1Seconds = this.getSeconds(time1.split(':'));  
        const t2Seconds = this.getSeconds(time2.split(':'));
        let timeDiff = t2Seconds - t1Seconds; 
    
        // convert into hour:minute:seconds 
        const HH = Math.floor(timeDiff/3600); // seconds in one hour 
        timeDiff %= 3600;           
        const MM = Math.floor(timeDiff / 60);  // seoconds in one minute 
        timeDiff %= 60; 
        const SS = timeDiff; 
    
        return [HH, MM, SS]; 
    }

    add_23h_59m_59s(currTime){
        currTime = this.getSeconds(currTime.split(':')); 
        let addingTime = this.getSeconds(['23', '59', '59']); 
        let totalTime = currTime + addingTime; 

        // convert into new HH::MM::SS 
        const HH = totalTime / 3600; 
        totalTime %= 3600; 
        const MM = totalTime / 60; 
        totalTime %= 60; 
        const SS = totalTime; 

        return `${HH}:${MM}:${SS}`; 
    }


    // Posting: time: 15:24:20 date: 05-09-2024
    // today: time: 08:23: 10 date: 10-09-2024 
    timePassed(){
        const now = new Date(); 
        const todayDate = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`; 
        let currTime = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`; 

        let elapsedTime = null; 
        if(this.date_diff_indays(todayDate, this.date) == 0){
            const timeDiff = (this.time_diff(this.time, currTime)); 
            if(timeDiff[0] != 0){
                elapsedTime = `${timeDiff[0]} hours`; 
            }
            else if(timeDiff[1] != 0){
                elapsedTime = `${timeDiff[1]} mins`; 
            }
            else{
                elapsedTime = `${timeDiff[2]} secs`; 
            }
        }
        else {
           if(this.date_diff_indays(this.date, todayDate) === 1){
                currTime = this.add_23h_59m_59s(currTime); 
                
                const timeDiff = this.time_diff(this.time, currTime); 
                const timeDiffSeconds = this.getSeconds(timeDiff); 

                if(timeDiffSeconds < 86400){ // less than 24 hours 
                    if(timeDiff[0] != 0){
                        elapsedTime = `${timeDiff[0]} hours`; 
                    }
                    else if(timeDiff[1] != 0){
                        elapsedTime = `${timeDiff[1]} mins`; 
                    }
                    else{
                        elapsedTime = `${timeDiff[2]} secs`; 
                    }
                }
                else {
                    elapsedTime = '1 d'; 
                }
           } 
           else{
                elapsedTime = `${this.date_diff_indays(this.date, todayDate)} days`; 
            }
        }
        return elapsedTime; 
    }
}

const comment = new Comment(2,3,"Nice Explanation", "20:00:00", "2024-08-5");
console.log(comment.timePassed());
























// JavaScript function calculate difference between two given dates 
// Formate of Date: YYYY-MM-DD


// Javascript Date Formate: MM/DD/YYYY
// Months: [Jan, Dec] = [0, 11] 

// // const todayDate = new Date('2014-04-2'); // ISO formate 
// const date1 = "2014-02-12"; 
// const date2 = "2014-04-11"; 
// console.log(date_diff_indays(date1, date2));

// console.log(new Date().getMonth());


// const t1 = '2:15:00'; 
// const t2 = '7:00:00'; 

// console.log(time_diff(t1, t2)); 


// const time = "12:35:39"; 
// const timeComponent = time.split(':'); // tokenization 
// timeComponent[0] = Number(timeComponent[0]); 
// console.log(timeComponent);







