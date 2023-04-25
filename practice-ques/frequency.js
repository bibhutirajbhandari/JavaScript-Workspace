const arr = [1, 1, 1, 1, 1, 2, 2, 2];
const map = new Map();

function frequency(arr) {
  arr.forEach((element) => {
    if (map.has(element)) {
      let count = map.get(element);
      map.set(element, ++count);
    } else {
      map.set(element, 1);
    }
  });
}

frequency(arr);
console.log(map);
