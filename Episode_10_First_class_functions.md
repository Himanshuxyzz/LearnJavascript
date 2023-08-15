<!-- styles -->

<style>
    * {
        font-family:sans-serif;
    }
    .highlight-normal {
        padding-inline:15px;
        padding-block:6px;
        background-color:#d9d;
        border-radius:3px;
        font-weight:700;
    }
    .highlight-em {
         padding-inline:10px;
        background-color:#cdfab6;
        border-radius:3px;
        font-weight:700;
    }
    .sub-heading {
        font-size:0.8rem
    }

    .code-example {
        font-weight:700;
         background-color:#d9d9d9; border-radius:8px;
    }
</style>

#### # Functions

<span class="highlight-normal sub-heading">Anonymous functions</span> are basically function without name , so what are the first class functions ? First-class functions in JavaScript allow functions to be treated as variables, just like strings or numbers. This means you can store functions in variables, pass them as arguments to other functions, and even return them from other functions. This makes JavaScript more flexible and powerful, allowing for dynamic and customizable operations. For example, you can assign a function to a variable and execute it, pass functions as arguments to perform different operations, and even create functions that return other functions to create custom functionality. This feature makes JavaScript a highly expressive and functional programming language.

##### #so it means that first class functions and regular functions are same ?

No, first-class functions and regular functions are not the same, although they do share some similarities.

A regular function is a piece of code that takes in input, performs a series of tasks, and returns an output. It can be defined and executed within a program.

On the other hand, a first-class function is a function that can be treated as a value. This means it can be passed as an argument to other functions, returned as a result from a function, and stored in data structures like variables or arrays.

In some programming languages, like JavaScript and Python, functions are considered first-class citizens. This allows for powerful features such as higher-order functions, where functions can accept other functions as arguments or return them.

In summary, while regular functions are a basic building block of code execution, first-class functions offer additional flexibility and functionality by treating functions as values.

Things to cover in this function topic

- **Function statement**
  A function statement or function declaration, also known as a function declaration, is a way to define a named function in JavaScript using the "function" keyword followed by the function name and a code block.
  <pre class="code-example">
  function a() {
  console.log("a is called);
  }  
  a()
   </pre>
- **Function expression**
  A function expression is another way to define a function in JavaScript. It involves assigning a function to a variable or a property of an object.
    <pre class="code-example">
  var b = function () {
      console.log("b is called");
  }
    </pre>
  The difference between function statement and expression is function statements are can be hoisted , where as the function expressions are can't be hoisted or we cannot call before defining function
- **Anonymous function**
An anonymous function is a function without a name. It can be defined using a function expression and is often used as a callback function or in self-invoking functions.
<pre class="code-example">
function () {
console.log("hello")
}

 </pre>
 using the above code will throw syntax error but according to ecma script it is completely valid which is correct because anonymous functions are used in where functions are stored in variable
 for e.g -> 
 <pre class="code-example">
var a = function () {
console.log("hello")
}
 </pre>
- **Named function expression**
A named function expression is a function expression with a name. The name is only accessible inside the function, making it useful for recursion or self-referencing.
<pre class="code-example">
 var a = function b() {
    console.log("hello");
 }
 </pre>
- **Difference between parameters & arguments ?**
Parameters are the variables defined in a function's declaration, while arguments are the values passed to a function when it is called. Parameters are used within the function to perform operations, while arguments provide the values for those operations.

- Parameter
<pre class="code-example">
 var b = function(parameter1,parameter2){
    console.log("parameter" parameter1 , "parameter" parameter2);
 }
 </pre>
- Arguments
<pre class="code-example">
var b = function(parameter1,parameter2){
   console.log("parameter" parameter1 , "parameter" parameter2);
}

b(argumet1,argument2);
e.g - b(1,2)

</pre>
- **First class functions**
In JavaScript, functions are considered first class citizens, which means they can be treated as values, assigned to variables, passed as arguments to other functions, and returned from functions.
<pre class="code-example">
var a = function x() {
    return function () {
        console.log("inner function");
    }
}

var test = a() // it will return inner anonymous function
 </pre>
- **Arrow functions**
This is introduced in ES6 in the year 2015 
<pre class="code-example">
 
 </pre>
