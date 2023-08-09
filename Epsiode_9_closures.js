// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   y();
// }
// x();

function a() {
  var w = 15;
  function b() {
    var x = 20;
    function c() {
      console.log(w, x);
    }
    c();
  }
  b();
}

a();
