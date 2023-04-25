const arr = [10, 13, 14];

function avg() {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
  const average = sum / arr.length; //array length is 3 here

  return average;
}

const res = avg();
console.log(res);
