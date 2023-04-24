// async function bibhuti() {
//   console.log("going to hospital");
//   hospital();
//   console.log("got the report!");
// }

// async function hospital() {
//   console.log("here for a sample test");
//   await sampleliney().then((result) => {
//     lab(result);
//     console.log("#3");
//   });
// }

// async function sampleliney() {
//   console.log("sample submitted");
//   tokenNo = tokengenerate();
//   return tokenNo;
// }

// function tokengenerate() {
//   const token = 001;
//   return token;
// }
// function lab(tokenNo) {
//   console.log(`Report of token ${tokenNo} is ready!`);
// }

// bibhuti();

async function bibhuti() {
  console.log("Going to hospital");
  hospital().then((response) => {
    console.log("got the report");
  });
  console.log("bibhuti farkiyo");
}

async function hospital() {
  console.log("here for a sample test");
  //   await sampleLiney().then((response) => {
  //     tokenGenerate().then((result) => {
  //       lab(result);
  //     });
  //   });
  await sampleLiney();
  tokenGenerate().then((result) => {
    lab(result);
  });
}

async function sampleLiney() {
  console.log("Sample liyo");
}

async function tokenGenerate() {
  console.log("token generated");
  return "123";
}

function lab(token) {
  console.log(`report for ${token} is ready`);
  console.log("report sent on email");
}

bibhuti();
