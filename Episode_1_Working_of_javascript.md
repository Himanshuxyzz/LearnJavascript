### # Working Of Javascript 🔧

---

> "_Everything in javascript happens inside an_ **execution context** "

- we can assume execution context as big box and container in which whole javascript code is executed.

- Execution context has 2 component one is memory component.
  1. **Memory component** or **variable envoirnment** is a place where all the varibales and functions are stored as key value pairs.
  2. **Code component** or thread of execution this is a place where code executes line by line or one line at a time.

> "_Javascript is a synchronous single-threaded language_"

- When someone say **Single Threaded** that means javascript can only execute one command at a time, Where as when someone say **Synchronous single threaded** that means javascript can only execute one command at a time and in a specific order each line must be execute before moving to next phase.

---

#### # Javascript code execution in-depth 😮‍💨

- When we run javascript program it will create an **global execution context**.

- Execution context is created into two phases so the first phase is known as **memory creation phase** and second is **code execution phase**.

  1. ##### **Memory allocation phase**

     In **memory allocation phase** javascript will allocates memory to all the variables and functions , so as soon as javascript reaches any varible javascript will reserve memory for that variable and allocates special value undefined, it's an plcaeholder special keyword in javascript , where as in case of functions the function code is copied over here in memory space.

  2. ##### **Code execution phase**

     Let's see what happens in second phase which is **code execution phase**, previously in memory allocation phase

for.eg ->
`var n = 2;`
`function square (num){`
`var ans = num * num;`
`return ans;`
`}`
`var square2 = square(n);`
`var square4 = square(4);`

\*in this example global execution context is created in two phases :- memory creation and code execution phase

**Memory creation phase - 1st phase**
as we know as soon as we encounter variable it will assign memory and it store a speical value which is known as undefined for variables in memory creation phase.

> n : undefined
> square2 : undefined
> square4 : undefined

where as in case of function the whole function code is stored in memory space

> square : {....}

**Code execution phase - 2nd phase**

so javascript once again runs through whole code and comes to execution where all these functions and values are assigned also calucations are done as soon as javascript encouters.
for.eg -

> var n = 2;

the value 2 will now be allocated to n where earlier in memory creation phase undefined was stored.

now when javascript encounters function call
like this - >

> var square2 = square(n)
> square()

it means now function is being executed and whole new execution context is created for that function which is followed by same components memory and code component

`function square (num:this is argument){`
`var ans = num * num;`
`return ans;`
`}`

> **Memory creation phase - 1st phase**
> num : undefined
> ans : undefined

> **Code execution phase - 2nd phase**
> in case of :- var square2 = square(n: this is parameter);

in parent execution context where n = 2 is stored in memory is passed in this square function in place of n parameter of function
now values will look like

> num : 2

and now execution will be done inside function where

> `var ans = num * num;`
> `num = 2`
> ans : undefined (in memory execution phase)
> `ans = 2 * 2`
> and now ans will become 4
> `ans : 4`

where in the end we are returning the ans and return tells the function work is done and return to back execution context and return the control of program where,

function was invoked and the returned
value will replace the undefined of square2 which was earlier undefined.

now if we think it looks soo much complicated to manage all these excution context javacsript manages all things beautifully by using call stack a call stack is like a stack.

where in the bottom we have our global execution context pushed into the call stack when javascript program runs and when ever any new execution is created it pushed into call stack suppose E1 and when returns to global execution the E1 is popped out of call stack same thing happens for other execution context and after work done popped out of stack return controls to the global execution context

that is how all control,execution context creating , deleteing is managed

after all executions global execution context is also popped out of call stack

**other names of call stack**

1. Execution context stack
2. program stack
3. control stack
4. runtime stack
5. machine stack
