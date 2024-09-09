"use strict"; 

class Student{
    constructor(name, clss, phy, chem, math){
        this.name = name; 
        this.clss = clss; 
        this.physics = phy; 
        this.chemistry = chem; 
        this.math = math; 
        this.total = phy + chem + math;  
    }

    isPass(){
        if(this.physics >= 33 && this.chemistry >= 33 && this.math >= 33){
            return true; 
        }
        return false; 
    }

    average(){
        // return  Math.round(this.total/3 * 100) / 100; 
        return (this.total/3).toFixed(2); 
    }

    grade() {
        const avg = this.total/3; 
        if(!this.isPass()){
            return 'F'; 
        }
        else if(avg >= 90){
            return 'O'; 
        }
        else if(avg >= 80){
            return 'A+'; 
        }
        else if(avg >= 60){
            return 'A'; 
        }
        else if(avg >= 40){
            return 'B'; 
        }
        else {
            return 'C'; 
        }
    }
}

const student1 = new Student("Kushal Jain", 11, 23, 80, 95); 
console.log(student1.total);
console.log(student1.average()); 
console.log(student1.grade()); 
console.log(student1.isPass());  