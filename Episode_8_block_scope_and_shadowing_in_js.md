<!-- styles -->

<style>
    * {
        font-family:sans-serif;
    }
    .highlight-normal {
        padding-inline:15px;
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

#### # Block scope and shadowing

---

##### # Block scope

<span class="highlight-normal sub-heading">Blocks</span> are defined as `{...}` or we say curly braces and it does nothing it also works to compound statement or wrap multiple statements in a block so we can use it in place where javascript execute multiple statement.

> #fun fact
> e.g -> if(condition....) statement; is valid syntax but using this way we can only execute one statement that can be disadvantage in many case so that's why we use {....} with if to wrap multiple statements inside the {...} so can execute multiple statements rather than one.
> e.g -> `if(condition....) {` > `....statement1;` > `statement2..;` > `}`

<span class="highlight-normal sub-heading">Block Scope</span>

This means all the variables and function we can access inside the blocks are known as Block scope.

<pre class="code-example">
{
    let a = 10; //let will hoisted in block memory space.
    var b = 100; //var will be hoisted in global memory space.
    const c = 30; //const will be hoisted in block memory space.
}
</pre>

- the variables inside block are hoisted in different memory space that is reserved for that particular block.

- Also we can't use variables from block outside the block only variable defined with <span class="highlight-em">var</span> can be accessible outside the block because <span class="highlight-em">it attaches it self in the global memory space.
  </span>

<pre class="code-example">
{
    let a = 10;
    var b = 100;
    const c = 30;
    console.log(a); //10
    console.log(b); //100
    console.log(c); //30
}
    console.log(a); //10
    console.log(b); // not defined will throw error
    console.log(c);
</pre>

<span class="highlight-normal sub-heading">Shadowing</span>

if we have same named variable outside the block then the same variable inside the block shadows the variable of outside.

<pre class="code-example">
var a = 100;
{
    let a = 10;
    var b = 100;
    const c = 30;
    console.log(a); //10
    console.log(b); //100
    console.log(c); //30
}
    console.log(a); //10
</pre>

in the ablove snippet we can see that <b>a</b> is shadowed inside block and also modified so outside the block we still get modified value of <b>a</b> because they are pointing at same memory location.

Incase of <b>let</b> and <b>const</b>

<pre class="code-example">
let a = 60;
{
    let a = 10;
    var b = 100;
    const c = 30;
    console.log(a); //10
    console.log(b); //100
    console.log(c); //30
}
    console.log(b); //60
</pre>

We also cannot use variable of same name with different type inside block.

it's called illegal shadwoing.

<pre class="code-example">
let b = 60;
{
    var b = 100;
}
//error Indentifier 'b' has already been declared
</pre>

<!-- second example -->

 <pre class="code-example">
let b = 50;
{
    let b = 100;
}
//no error
</pre>

<!-- third example -->

 <pre class="code-example">
var b = 60;
{
    let b = 100;
}
//this also not throw error
</pre>
