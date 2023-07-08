#### # let & const in js , temporal zone

---

##### # let & const in js

> let and const are hoisted infact these are in tempral dead zone.

<pre style="font-weight:700; background-color:#d9d9d9; border-radius:8px;">
console.log(b);
let a = 10;
var b = 100;
</pre>

for var the <span class="highlight">b</span> will get hoisted and we can find <span class="highlight">b</span> in global memory space or window object in browser, where as in case of a it does get hoisted means memory in other memory space rather than global is allocated in which undefined is stored even before assigning values

##### # temporal deadzone

> In this the time since when this <span class="highlight">let</span> and <span class="highlight">const</span> variable is hoisted till initialised some value.

> if varible defined as let we cant make with same name varibale in <span class="highlight">let</span> <span class="highlight">const</span> javasript will throw syntax error and block code execution but in case of <span class="highlight">var</span> we can use same variable name where as if we try to initialise the variable name of let defined variable javascript will throw error.

##### # SyntaxError, TypeError & RefrenceError



<style>
    .highlight {
        padding-inline:15px;
        background-color:#d9d;
        border-radius:3px;
        font-weight:700;
    }
</style>
