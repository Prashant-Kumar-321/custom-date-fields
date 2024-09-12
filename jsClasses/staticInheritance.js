class StaticClass{
    static staticField1 = 'static field'; 
    static staticField2; 
}

class SubStaticClass extends StaticClass{
    static subStaticField1 = 'Sub Static Field'; 
}

function main1() {
    console.log(Object.hasOwn(StaticClass, 'staticField1')); // true 
    console.log(SubStaticClass.staticField1); 
    console.log(SubStaticClass.staticField2); 
    console.log(SubStaticClass.subStaticField1); 
    
}
main1(); 