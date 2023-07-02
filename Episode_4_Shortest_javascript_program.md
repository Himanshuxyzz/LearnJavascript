#### # Shortest Javascript program

---

Even with empty js file an `global exexution context` is created along with a global object which is created by javascript engine e.g -> in browsers it's `window` global object.

Just like windows js engine also create `this` variable at global level `this` points to window object.

fun fact :- In global level in browsers

> `this === window` // true

##### # Global space

Any variable outside the function comes under global space

> //Example :-
> `var a = 10;`//variable in global space
> `function a () {`
> `var x = 10;`//variable in local space
> `}`
global space variables are attached into the window object so 
`console.log(a) is equivalent to console.log(window.a) also console.log(this.a)`

