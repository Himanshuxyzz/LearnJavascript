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

    .nothing {
        padding:10px;
    }
</style>

#### # Callbacks

**Functions passed in another function is called callback functions.**

<span class="highlight-normal sub-heading">Things to cover</span>

- What is a callback function in javascript ?
- javascript is a synchronous and single-threaded language
- Blocking of main thread
- Power of callbacks ?
- Deep about Event Listeners
- Clousers demo with Event listeners
- Scope demo with Event listeners
- Garbage collection & removeEventListeners

---

- What is a callback function in javascript ?
- javascript is a synchronous and single-threaded language
- Blocking of main thread
- Power of callbacks ?
<pre class="code-example">
setTimeout(function () {
    console.log("timer");
},5000)

or

function x(y) {
console.log("x");
y();
}

x (function y() {
console.log("y");
})

</pre>

**We use asynchronous javascript code to avoid blocking main thread or call stack hence why the time taking process is done asynchronous to avoid blocking, hence why callbacks,first class functions,setTimeout,setInterval are needed to perform asynchronous task.**

---

- Power of callbacks ?
- Deep about Event Listeners
- Clousers demo with Event listeners
- Scope demo with Event listeners

<pre class="code-example">
const btn = document.getElementById("clk");

btn.addEventListener("click", (e) => {
  console.log(e);
});


let count = 0;
const btn = document.getElementById("clk");
btn.addEventListener(
  "click",
  (asz = () => {
    console.log(`Button is clicked : ${++count}`);
  })
);

with clousers 

function eventLdemo() {
    let count = 0;
    document.getElementById("btn").addEventListener("click",function callack() {
        console.log(`Button is clicked : ${++count}`);
    });
}

eventLdemo();
</pre>

- Garbage collection & removeEventListeners

<pre class="code-example">
function clickHandler() {
  console.log("Button clicked");
}

let button = document.querySelector("button");

// Add event listener
button.addEventListener("click", clickHandler);

// Remove event listener
button.removeEventListener("click", clickHandler);
</pre>

**Garbage collection in JavaScript refers to the process of automatically reclaiming memory occupied by objects that are no longer in use. When an object is no longer referenced or reachable, it becomes eligible for garbage collection. The JavaScript engine, like V8, frees up the memory occupied by these objects for efficient memory management.**
