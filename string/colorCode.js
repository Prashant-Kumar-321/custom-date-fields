// ColorCode
    // randomHexCode(): string
    // randomRGBACode():string

class ColorCode{
    static #getRandomNumber(min, max){
       const ranNum = Math.floor(Math.random()*(max-min+1)) + min; 

       return ranNum; 
    }

    static #getRandomAlpha(){
        const DECIMALFACTOR = 100; 
        const ranAlpha  = Math.floor((Math.random() * (DECIMALFACTOR+1))); 

        return ranAlpha / 100; 
    }

    static randomHexCode(){
        const hexDigit = "0123456789ABCDEF";
        const MIN = 0, MAX = 15; 
        let hexColorCode = "#"; 
        for(let i=0; i<6; ++i){
            let idx = ColorCode.#getRandomNumber(MIN, MAX); 
            hexColorCode += hexDigit[idx]; 
        }

        return hexColorCode; 
    }

    static randomRGBACode() {
        // RGBA
        // rgba(r, g, b, a);
        const R = this.#getRandomNumber(0, 255); 
        const G = this.#getRandomNumber(0, 255); 
        const B = this.#getRandomNumber(0, 255);  
        const A = this.#getRandomAlpha(); 

        return `rgba(${R}, ${G}, ${B}, ${A})`; 
    }
}

// console.log(ColorCode.getRandomNumber(0, 255));
// console.log(ColorCode.randomHexCode());
// console.log(ColorCode.randomRGBACode()); 





