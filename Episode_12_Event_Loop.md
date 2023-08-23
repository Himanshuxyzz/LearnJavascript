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
