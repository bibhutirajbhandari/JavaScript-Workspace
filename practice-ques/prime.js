const array = [16, 3, 7, 9];
let flag = 0;

array.forEach((e) => {
  console.log(prime(e));
});

function prime(element) {
  let sqroot = Math.floor(Math.sqrt(element));

  if (element <= 1) {
    return false;
  }

  let i = 2;

  while (i <= sqroot) {
    if (element % i === 0) {
      return false;
    }
    i++;
  }
  return true;
}
