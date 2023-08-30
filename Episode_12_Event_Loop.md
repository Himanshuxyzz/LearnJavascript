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

#### # Event Loop & Async Javascript

**reference -> https://www.youtube.com/watch?v=8zKuNo4ay8E&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=18**

<!-- <span class="highlight-normal sub-heading">Things to cover</span> -->

**# Web Api In Javascript**

- setTimeout()
- DOM API
- fetch()
- localstorage
- console
- location

these above are the part of web api (window) that is provided by the browser not provided by the javascript.

**# Event Loop and Callback Queue**

<pre class="code-example">
console.log("start");
setTimeout(function callback() {
    console.log("callback");
},5000);
console.log("end");
</pre>

when using setTimeout() function after the given time expires the callback is stored in callback queue and job of event loop is to check callback queue and push callback in call stack for executing the callback function.

here are more examples to understand callback queues and event loop

<pre class="code-example">
console.log("start");
document.getElementById('btn).addEventListener('click',function callback() {
    console.log("callback")
});
console.log("end");
</pre>

**# How Event Listeners Work In Js**

<pre class="code-example">
console.log("start");
document.getElementById('btn).addEventListener('click',function callback() {
    console.log("callback")
});
console.log("end");
</pre>

**What is addEventListener ?**

It's given by the browser through the browser javascript engine by window object in form of web api which is a DOM api

**How it work ?**

It registers the callback on a event when event is clicked , in detail inside the web api env. the callback is registered and then event is attached on it e.g -? 'click,'hover' e.t.c and after attaching and moves on and start executing next line then we have nothing to execute and GEC moves out of call stack but event handlers presist on web api env until and unless explicitly remove the listener or close the browser,

so when button is clicked this callback method pushed inside the callback queue and it waits for it's turn to be executed.

**# Event Loop**

Event loop has only job is to continously monitor the call stak and callback queue so if this callback queue is empty and this event loops sees that also a function waiting to be executed inside callback queue so event loop it just takes the function and push it inside call stack and quickly executes it and then after done callback is popped outside of callstack
