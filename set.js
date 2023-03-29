//TASK : Filter unique array members.
// Let arr be an array.Create a function unique(arr) that should return an array with unique items of arr.

function unique(arr) {
    /* your code */
    const names = new Set(arr);
    return names;
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"];
  
  console.log( unique(values) ); // Hare, Krishna, :-O


//TASK: How can we fix the code to make keys.push work?

// CODE:
// let map = new Map();
// map.set("name", "John");
// let keys = map.keys();
 
// keys.push("more"); // Error: keys.push is not a function

let map = new Map();

map.set("name", "John");

let arr=[];
for(let key of map.keys()) {
    arr.push(key);
}

arr.push("more");
console.log(arr);

