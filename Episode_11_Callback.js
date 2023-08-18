// setTimeout(function () {
//   console.log("timer");
// }, 5000);

// function x(y) {
//   console.log("x");
//   y();
// }

// x(function y() {
//   console.log("y");
// });

///////////////////////////////

// let count = 0;
// const btn = document.getElementById("clk");
// btn.addEventListener(
//   "click",
//   (asz = () => {
//     console.log(`Button is clicked : ${++count}`);
//   })
// );

function eventL() {
  let count = 0;
  const btn = document.getElementById("clk");
  btn.addEventListener(
    "click",
    (asz = () => {
      console.log(`Button is clicked : ${++count}`);
    })
  );
}

eventL();
