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

**# How fetch works ?**

Fetch is use for request api call so this fetch function returns promise and we have to pass callback function once this promise is resolved.

for complete refrence - https://www.youtube.com/watch?v=8zKuNo4ay8E&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=20 at 27:30

**#Micro task queue (more priority over callback queue)**

soo much to write lazy enough to write

for complete refrence - https://www.youtube.com/watch?v=8zKuNo4ay8E&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=20 at 30:29


micro task queues is the queues which stores callback from promises and mutation observer.

**Important thing to note**

In case there are more than 2 task pending in micro task queue so in that case event loop will only give opportunity to the callback of callback queue once every task is completed from micro task queue.

**Starvation**

In several case in which there are series of tasks and also chance of nested tasks inside micro task queue creates a condition where the callback in callback queue doesn't get chance to execute the task of callback queue this condition is called starvation of callback queue.



SOME QUESTIONS

Have some quick questions: 
1) When does the event loop actually start ? 
2) Are only asynchronous web api callbacks are registered in web api environment ? 
3) Does the web api environment stores only the callback function and pushes the same callback to queue/microtask queue? 
4) How does it matter if we delay for setTimeout would be 0ms. Then callback will move to queue without any wait ?

ANSWERS

1. When does the event loop actually start? - Event loop, as the name suggests, is a single-thread, loop that is `almost infinite`. It's always running and doing its job. ❤️
2.  Are only asynchronous web API callbacks are registered in the web API environment? - YES, the synchronous callback functions like what we pass inside map, filter, and reduce aren't registered in the Web API environment. It's just those async callback functions that go through all this.
3. Does the web API environment stores only the callback function and pushes the same callback to queue/microtask queue? - Yes, the callback functions are stored, and a reference is scheduled in the queues. Moreover, in the case of event listeners(for example click handlers), the original callbacks stay in the web API environment forever, that's why it's advised to explicitly remove the listeners when not in use so that the garbage collector does its job.
4. How does it matter if we delay for setTimeout would be 0ms. Then callback will move to queue without any wait? 
No, there are trust issues with setTimeout() 😅. The callback function needs to wait until the Call Stack is empty. So the 0 ms callback might have to wait for 100ms also if the stack is busy.