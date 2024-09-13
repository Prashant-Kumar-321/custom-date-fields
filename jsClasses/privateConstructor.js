// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties#simulating_private_constructors

class Keyboard{
    // Help to check how user is trying to instantiate object of Keyborad
    static #isInternalConstructing = false;
    
    constructor(){
        if(!Keyboard.#isInternalConstructing){
            throw new TypeError("Keyborad is not constructible"); 
        }
        Keyboard.#isInternalConstructing = false;
    }

    static create(){
        this.#isInternalConstructing = true; 
        const instance = new Keyboard; 
        return instance; 
    }
}

const keyboard = Keyboard.create(); 
console.log(keyboard);
