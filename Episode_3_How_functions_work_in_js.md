### # How Functions Work In Javascript 🔧

---

> `var x = 1;`
> `a();`
> `b();` > `function a(){` > `var x = 10;` > `console.log(x);` > `}` > `function b(){` > `var x = 100;` > `console.log(x);` > `}`

Output :-

> 10
> 100
> 1

whenever js runs any program a global execution context is created and pushed into call stack.

And when js encounter function invocation then again execution context is also created also pushed into call stack along with memory creation and code execution component where values are assigned in variables are code execution is done .

As soon as work completed then this particular execution context is removed from call stack and now the control moves back to global execution context.

And after completion of all code execution then the global execution context is also removed from call stack
