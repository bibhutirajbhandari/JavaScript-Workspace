//Object reference and copying 

/*
 Objects are non-primitive datatypes (pass by reference)
    pass by reference : A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it.
    The actual value is changed! */

//To clone an object (does work of pass by value: makes copy of an object)

let user = {
    name : "Bibhuti",
    age : 22,
}

let clone1 = {};
Object.assign(clone1,user);
console.log(clone1);


let clone2 = Object.assign({},user);  
console.log(clone2);

//or

let clone3 = Object.assign({},{...user});
console.log(clone3);

//main take away?: first declare variable as object to assign/clone an object to it


// ... (Spread/Rest Operator here, destructures the objects into it's properties. And {} puts all the properties into an object structure for assignment)
 const lastname = 'Rajbhandari';
 
  const Bibhuti= {
    ...user,
    lastname
  }
  console.log(Bibhuti); 