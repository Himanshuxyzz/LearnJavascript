### # Hoisting In Javascript 🔧

---

`var x = 7;`
`function getName() {`
`console.log("Namaste javascript);`
`}`

`getName();`
`console.log(x);`

> **Output** :-
> Namaste javascript
> 7

but if we...

`getName();`
`console.log(x);`

`var x = 7;`
`function getName() {`
`console.log("Namaste javascript);`
`}`

??? what can be the output

> **Output** :-
> Namaste Javascript
> undefined

"This phenomenon is called hoisting by which we can access function and variables even before initialised without any error"

as we know because of global execution context two phases are created meomory creation and code execution in which,

memory is allocated and undefined is stored in memory creation phase where as in code execution execution and values are allocated so when we are trying to console variable before values are assigned it will output undefined.

but incase of function it will execute function because as we know already that whole function code is stored in memory creation phase this is why we can access function

**Fun fact**

function created with function keyword is attached it self into window object.
also variable created with var keyword is also attached into window object.

**\*Case - 2**

**In function**

`getName();`
`console.log(x);`

`var x = 7;`
`var getName = function () {`
`console.log("Namaste javascript");`
`};`

OR

`getName();`
`console.log(x);`

`var x = 7;`
`var getName =  () => {`
`console.log("Namaste javascript");`
`};`

> **output** :-
> Uncaught TypeError: getName is not a function

in this case now function will act same as normal varibale in which undefined is stored in memory creation phase arrow function doesn't get hoisted.

**In variable**

`console.log(getName);`
`getName();`
`console.log(x);`

`function getName() {`
`console.log("Namaste javascript");`
`}`

> **output** :-
> ƒ getName() {
> console.log("Namaste javascript");
> }
> Namaste javascript
> Uncaught ReferenceError: x is not defined

**Type of variables also matters** :-

###### # Incase of var

`console.log(getName);`
`getName();`
`console.log(x);`

`var x = 7;`
`function getName() {`
`console.log("Namaste javascript");`
`}`

> **output** :-
> ƒ getName() {
> console.log("Namaste javascript");
> }
> Namaste javascript
> undefined

###### # Incase of let and const

`console.log(getName);`
`getName();`
`console.log(x);`

`let x = 7;`
`function getName() {`
`console.log("Namaste javascript");`
`}`

> **output** :-
> ƒ getName() {
> console.log("Namaste javascript");
> }
> Namaste javascript
> Uncaught ReferenceError: Cannot access 'x' before initialization
