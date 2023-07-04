/*
undefined and undefined

console.log(a); in case of var the output will be undefined because var is hoisted where as in case of let it will throw error that we cant use a beofre inintialization
var a;
console.log(a); undefined
a = 10;
if (a === undefined) {
  console.log("a is undefined");
} else {
  console.log("a is defined");
}
*/

var a;
console.log(a);
a = 10;
console.log(a);
a = "something string";
console.log(a);
a = undefined
console.log(a)
