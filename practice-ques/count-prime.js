const array = [1];
let count = 0;

array.forEach((e) => {
  prime(e);
});
console.log(count);

function prime(element) {
  let flag = 0;
  let i = 2;

  if (element === 1) {
    return flag;
  }

  let sqroot = Math.floor(Math.sqrt(element));

  while (i <= sqroot) {
    if (element % i === 0) {
      flag++;
    }
    i++;
  }
  if (flag === 0) {
    count++;
  }
}
