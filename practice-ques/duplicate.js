const objects = [
  { id: 123, name: "bibhuti" },
  { id: 143, name: "kartikay" },
  { id: 123, name: "riya" },
];

function dublicate(arr) {
  let map = new Map();

  objects.forEach((element) => {
    if (map.has(element.id)) {
      let count = map.get(element.id);
      map.set(element.id, ++count);
    } else {
      map.set(element.id, 1);
    }
  });
  return map;
}

const res = dublicate(objects);
console.log(res);
