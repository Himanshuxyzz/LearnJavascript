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



##### #Clousers interview questions

- ###### Question 1
<pre class="code-example">
function x() {
    var i = 10;
    setTimeout(function() {
        console.log(i);
    },1000)
}

x();
output:- it will print 10 after 1000ms or equivalent to 1 second

</pre>

- ###### Question 2

<pre class="code-example">
function x() {
    var i = 10;
    setTimeout(function() {
        console.log(i);
    },4000);
    console.log("Namaste Javascript);
}

x();
output :- it will print Namaste Javascript first and then 10 after 1000ms or equivalent to 1 second

reason :- because of the asynchronous nature of setTimeout() whic prevent event flow from stopping for setTimeout to finish
</pre>

- ###### Question 3

<pre class="code-example">
function x() {
    for(var i = 1;i<=5;i++) {
    setTimeout(function() {
        console.log(i);
    }, i * 1000);
    }
    console.log("Namaste Javascript");
}

x();
output :- it will print Namaste Javascript first and then 6 after 1000ms or equivalent to 1 second each second for 5 times

reason :- because of the asynchronous nature of setTimeout() and hositing of var variable which prevent event flow from stopping for setTimeout to finish and pointing to the refrence
</pre>

###### Question 4

<pre class="code-example">
function x() {
    for(let i = 1;i<=5;i++) {
    setTimeout(function() {
        console.log(i);
    }, i * 1000);
    }
    console.log("Namaste Javascript");
}

x();
output :- it will print Namaste Javascript first and then 1...2....3...4...5..6 after 1000ms or equivalent to 1 second each second for 5 times

reason :- because of the asynchronous nature of setTimeout() which prevent event flow from stopping for setTimeout to finish
</pre>

###### Question 5

<pre class="code-example">
function x() {
    for(var i = 1;i<=5;i++) {
        function close(i) {
            setTimeout(function() {
             console.log(i);
    }, x * 1000);
    }
    close(i);
    }
    console.log("Namaste Javascript");
}

x();
output :- it will print Namaste Javascript first and then 6 after 1000ms or equivalent to 1 second each second for 5 times

reason :- because of the asynchronous nature of setTimeout() whic prevent event flow from stopping for setTimeout to finish
</pre>

##### #Data Hiding or Encapsulation

<pre class="code-example">
//counter 

var count = 0;

function counter() {
    count++;
}

This will does the work but leaves with the data exposing issue to implement data hiding we can use concept of clousers

function counter() {
    var count = 0;
    return function IncrementCounter() {
        count++;
        console.log(count);
    }
}

This will provide data hiding feature by not exposing the count variable

var counter1 = counter(); inner function gets returned from the counter function which have the refrence to the outer function or we can say it forms a closure
counter1();
counter1();

</pre>

#### #Uses of Clousers

- Module Design Pattern
- Currying
- Functions like once
- Memoize
- Maintaining state in async world
- SetTimeouts
- Iterators
- And many more ....


#### #Disadvantages of Clousers

 - Over consumption of memory in clousers because every time clousers are formed it consume lots of memory and sometimes not garbage collected that means it accumlates lot of memory if we use clousers.

 - Can also lead to memory leaks because memory is accumlated and freeze the browser.


#### #Important Video
https://www.youtube.com/watch?v=t1nFAMws5FI&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=16