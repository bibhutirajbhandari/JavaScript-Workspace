// //https://javascript.info/array#tasks

// //Task 2 : Let’s try 5 array operations:

// // 1. Create an array styles with items “Jazz” and “Blues”.
// // 2. Append “Rock-n-Roll” to the end.
// // 3. Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
// // 4. Strip off the first value of the array and show it.
// // 5. Prepend Rap and Reggae to the array.

let styles = ["Jazz", "Blues"];

styles.push("Rock-n-Roll");
console.log(styles);

let mid = 0;
if (styles.length % 2 != 0) {
  mid = (styles.length - 1) / 2;

  styles[mid] = "Classics";
} else {
  console.log("add or remove element, to make the array odd.");
}
console.log(styles);

styles.shift(); // shift() removes the first element
console.log(styles);

styles.unshift("Rap", "Reggae");
console.log(styles);

//Task 4:

//The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].
//The task is: find the contiguous subarray of arr with the maximal sum of items.
//write the function getMaxSubSum(arr) that will return that sum.
//If all items are negative, it means that we take none (the subarray is empty), so the sum is zero.

function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) {
    // for each item of arr
    partialSum += item; // add it to partialSum
    maxSum = Math.max(maxSum, partialSum); // remember the maximum
    if (partialSum < 0) partialSum = 0; // zero if negative
  }
  return maxSum;
}

//   console.log(getMaxSubSum([-1, 2, 3, -9]) ); // 5

//Challenge 3 : Java Fundamentals -2 (045)

const John = {
  fullname: "John Smith",
  mass: 92,
  height: 1.95,
  calBMI: () => {
    let bmi = John.mass / John.height ** 2;
    return bmi;
  },
};

const Mark = {
  fullname: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: () => {
    let bmi = Mark.mass / Mark.height ** 2;
    return bmi;
  },
};

if (John.calBMI() > Mark.calcBMI()) {
  console.log(`${John.fullname} has higher BMI, ${John.calBMI()}`);
} else {
  console.log(`${Mark.fullname} has higher BMI, ${Mark.calcBMI()}`);
}
