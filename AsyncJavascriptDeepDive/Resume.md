---
noteId: "94206350d56011ec9114e3af2f19507b"
tags: []
---

# **Callbacks**

in this section there is an explanation of what a callback is and how this concept will help us throught the course
because its a concept to be used both inside a javascript synchronous and asynchronous.

```javascript
let logcall = function () {
  console.log("logcall was called back");
};
setTimeout(logcall, 5000);
```

a callback is just a function that will be resolved after something triggers it , by instance the setTimeout function will do this or maybe the user input registration with a callback function for the event handler

chaining a function with another callback is another method to improve our code

```javascript
asyncFunction().then(function(callback){
    console.log(callback);
}).then(function(val){
    console.log(val);
}))
```

in order to make a async call throught the api for the ducument


----
## **Promises and Async Await**

promises are a way to handle asynchronous operations that are going to be done by the event loop in the future. this tasks may be 

* **network calls**
* **IO Files**
* **Batch operations**
* **JSON operations and parsing**


###  promise example
```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 300);
});

myPromise
  .then(handleResolvedA, handleRejectedA)
  .then(handleResolvedB, handleRejectedB)
  .then(handleResolvedC, handleRejectedC);

```
###  async await example 
```javascript
async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
}

f();s

```


---
## **Generators**

are functions that may not run completly at the same time , they may have a **yield** reserved word that stops the generator from running until it is restored

simple yield example 
```javascript
"use strict";
function  *genTest(){
    let x=0;
    yield;
    console.log("start");
    x++;
    yield;
    console.log(x);
    x++;
    console.log(x);
    yield;
    return x;

}
let gen = genTest();
```