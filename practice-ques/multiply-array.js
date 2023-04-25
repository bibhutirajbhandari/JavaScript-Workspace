const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

//scale by k times , here k =2

function scale(arr) {
  const k = 2;

  for (let i = 0; i < arr.length; i++) {
    arr[i].forEach((element, index) => {
      element *= k;
      arr[i][index] = element;
    });
  }
}

scale(arr);
console.log(arr);
