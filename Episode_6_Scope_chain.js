function a() {
  var b = 10;

  function c() {
    console.log(b);
  }

  c();
}

a();
// console.log(b);

// console.log(b) b is not defined
