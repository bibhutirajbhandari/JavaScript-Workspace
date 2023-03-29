//Create a constructor function Calculator that creates objects with 3 methods:

// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of these properties.
// mul() returns the multiplication product of these properties.

let a = 4;
let b = 2;

let calc = new Calc(a,b);

function Calc(a,b) {
    this.a = a;
    this.b = b;
    
    this.sum = () => this.a+this.b;
    this.sub = () => this.a-this.b;
    this.mul = () => this.a*this.b;
};

console.log("Sum:"+ calc.sum());
console.log("Sub:"+ calc.sub());
console.log("Mul:"+ calc.mul());