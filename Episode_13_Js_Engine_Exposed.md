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

#### # Javascript Engine

**# Javascript Engine**

Javascript runtime envoirnment which has all the things required to run javascript code, so it has a Js Engine also some sets of api's and event loop also have callback queue and microtask queue and many more things in javascript envoirnment.

Javascript engine is the heart of javascript runtime envoirnment

Code -> parsing -> compilation -> execution.

##### # Parsing

The code is broken down into tokens so suppose if we write ->

<pre class="code-example">
let a = 7;
</pre>

then the code is broken down into tokens like let , a , = , 7

Then syntax parser comes into play, which converts the code into AST (Abstract Syntax Tree)

**AST for the above code**

<pre class="code-example">
{
  "type": "Program",
  "start": 0,
  "end": 189,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 179,
      "end": 189,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 183,
          "end": 188,
          "id": {
            "type": "Identifier",
            "start": 183,
            "end": 184,
            "name": "a"
          },
          "init": {
            "type": "Literal",
            "start": 187,
            "end": 188,
            "value": 7,
            "raw": "7"
          }
        }
      ],
      "kind": "let"
    }
  ],
  "sourceType": "module"
}
</pre>

##### # Compilation

Javascript has something known as JIT (just in time) compilation ,**Javascript can behaves as interpreted and compiled language** First of all What is an interpreter ? So it basically takes your code and starts executing the code line by line in the order and that's how whole code is executed.

Where as There are other languages which uses compiler to compile the code, so in case of compiler whole code is compiled first of all even before executing, so the code is compiled and a new code is compiled and new code is formed which is the optimised version of the code the it's executed.

**Pros and Cons of interpreter and compiler**

- Interpreter -> code executes very fast and it doesn't have to wait for code to be compiled first and it can immediately starts executing line by line.
- Compiler -> We have more efficiency

**Javascript can behaves as interpreted and compiled language to be dependent on the javascript engine when brandon created javascript it was supposed to be a interpreted language The javascript engine he wrote uses the interpreter to execute becuase javscript runs on the browser and browsers can't wait for the code to be compiled before executing code But now all modern browser and js engines uses an interpreter and compiler both together tha's why now days it's purely dependent upon the js engine whether it's purely interpreted or JIT compiled**

###### # JIT(Just In Time) compiler

Which uses both interpreter and compiler both together to execute the code

##### # Execution

After interpreting AST now interpreter converts the high level code to byte code and moves to execution step and while it's doing so it takes help of compiler to optimise the code so compiler basically talks to the interpreter and while the code is interpreted line by line the compiler tries to optimise the code line by line as much as it can it's not one phase process rather it's an multiple phase process all these js engines having different algorithms of doing it so the job of compiler is to optimise the code as much as it can on runtime that is why it also known as just in time compilation, In some js engines they have AOT (Ahead Of Time) compilation in that case it takes some piece of code which is going to be executed later and try to optimise as much as it can and also produce byte code which is then goes into execution phase and execution over there is not possible without these two major components of js engine which are 
- Call Stack -> Where all execution takes place.


- Memory Heap -> Where all memory is stored so it's constantly synced with call stack and garbage collector and lot of other things which are working together so memory heap is a space where variables and functions are assigned memory. 

- Garbage Collector -> It basically tries to free up memory when ever possible when some function is not being used or clear the timeout so it basically collects all garbage and sweeps it using algorithm "mark and sweep" 
