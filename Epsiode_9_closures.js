// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   y();
// }
// x();

// function a() {
//   var w = 15;
//   function b() {
//     var x = 20;
//     function c() {
//       console.log(w, x);
//     }
//     c();
//   }
//   b();
// }

// a();


function x() {
    for(var i = 1;i<=5;i++) {
    setTimeout(function() {
        console.log(i);
    }, i * 1000);
    }
    console.log("Namaste Javascript");
}

x();