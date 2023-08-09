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

#### # Clousers

---

##### # CLOUSERS

###### #reference video -> https://www.youtube.com/watch?v=qikxEIxsXco&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=12

<span class="highlight-normal sub-heading">Clousers</span> are basically function bundeled together with lexical scope or envoirnment (refrences to its surrounding state or variables). in other words clouser gives you access to another functions scope from an inner function.

basic e.g of where we can see clousers in work.

<pre class="code-example">
function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    y();
}

x() //output ->  7
</pre>

###### #**several examples where clousers work ->**

<pre class="code-example">
function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    return y;
}

x() //on calling this function it will return function defination of y

*with access to the parent function variables 
in order to call the y function
we have to store the function that is
*returned by a function after storing

*function we have to call the newly created varible which is returning the function

const z = x() //by assigning x in z , the z will store the function that is returned by x
z() // by calling this basically you are calling y function with access to the parent function or has the lexical scope envoirnment or clousre or refrence to the variable that is accessed by inner function that is returned by the x.
</pre>

##### #few more examples to understand it more better:

<pre class="code-example">
function x() {
    var a = 10;
    function y() {
        console.log(a);
    }
    a = 100;
    return y;
}

const z = x();

z();

//what will be the output betweeen 10 and 100?? 

100 ✅
</pre>

**So what it actually does ??**

<p class="highlight-em">
In function y, we use console.log(a). This means that it accesses its lexical environment, where a is defined with a value of 10. However, just before returning, we assign 100 to a. Since we are referring to the reference of a and not its value, the updated value will be logged to the console.
</p>

**now let's dig down more deep:**

<pre class="code-example">
function a() {
    var w = 15;
    function b() {
        var x = 20;
        function c() {
            console.log(w,x)
        }
        c();
    } 
    b();
}

a();
</pre>

fun fact : -> the values are retained

#### #Uses of Clousers
* Module Design Pattern
* Currying
* Functions like once
* Memoize
* Maintaining state in async world
* SetTimeouts
* Iterators
* And many more ....