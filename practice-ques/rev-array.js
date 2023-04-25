const initial = [1, 2, 3, 4];
const final = [];

const res = reverse();
console.log(res);

function reverse() {
  for (let i = initial.length - 1; i >= 0; i--) {
    final.push(initial[i]);
  }
  return final;
}
