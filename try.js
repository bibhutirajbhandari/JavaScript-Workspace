console.log("1");

oskar().then(() => {
  console.log("Shrestha");
});

bibhuti().then(() => {
  console.log("Rajbhandari");
});

console.log("A");
console.log("B");
ohrange().then(() => {
  console.log("C");
});

async function oskar() {
  console.log("Oskar");
}
async function bibhuti() {
  console.log("Bibhuti");
}
async function ohrange() {
  console.log("Ohrange");
}

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });

async function delay(ms) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(resolve("done!"), ms);
    return promise;
  });
}
delay(3000).then(() => console.log("runs after 3 seconds"));

new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then(function (result) {
    console.log(result); // 1

    return new Promise((resolve, reject) => {
      // (*)
      setTimeout(() => resolve(result * 2), 1000);
    });
  })
  .then(function (result) {
    // (**)

    console.log(result); // 2

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  })
  .then(function (result) {
    console.log(result); // 4
  }); // output: 1 2 4

fetch("https://www.google.com").then(function a() {
  console.log("a");
});

Promise.resolve().then(function b() {
  console.log("b");
});

Promise.reject().catch(function c() {
  console.log("c");
}); //output: b c a



function a(resolve, reject) {
  setTimeout(() => resolve(1), 1000);
  console.log("a");
}

function b(result) {
  console.log(result);

  return new Promise((resolve, reject) => {
    // (*)
    setTimeout(() => resolve(result * 2), 1000);
    console.log("c");
  });
}

function c(result) {
  console.log(result);
}

new Promise(a).then(b).then(b).then(c);
console.log("e");
//output: a e 1 c 2 c 4
