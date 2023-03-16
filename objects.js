//https://javascript.info/object#tasks


//Task 1: Write the code, one line for each action:
// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

let person = {}

person.name = "John"
person.surname = "Smith"

person.name = "Pete"
delete person.name;


//Task 2: Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

let flowers = {
    color: "yellow",
    petals: 3
}

isEmpty(flowers);

function isEmpty(flowers) {
    for(let key in person) {
        return false;
    }
    return true;
}


//Task 3 : Write the code to sum all salaries and store in the variable sum. If salaries is empty, then the result must be 0.

let salary = {};

function isEmpty(salary) {
    let sum=0;

    for(let key in salary) {
        sum += salary.key;
    } 
    console.log(sum);
}
isEmpty(salary);


//Task 4: Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
console.log("Before call: \n",menu);

function multiplyNumeric(menu) {
    for(let key in menu) {
        if(typeof menu[key] == 'number'){
            console.log(typeof menu[key])
        menu[key] *= 2;
    }
}
    return menu;
}
console.log("After call: \n",multiplyNumeric(menu));