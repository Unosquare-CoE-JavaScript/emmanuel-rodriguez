---
noteId: "ae5ca770d6c211ec9114e3af2f19507b"
tags: []

---

---
## **Functional Programming**


what is a function?
a function can be determined as a deterministic key value pair in which the result is always different
a function has the following characteristics:

* Total
* Deterministic
* No observable side efects

there may be partial functions and total functions
these functions have the following characteristics:
* Reliable
* Portable
* Reusable
* Testable
* Composable
* Properties

---
# Currying functions
curring functions are fucntions that are defined as functions with only one argument that may return a chain of functions with a different argument. this is convenient to implement when we may only want to have a pure function

```javascript
const  f =   x => y => z => x+y+z;
const f(1,2,3) //6
```
when using a curriyng fuction

in curry functions you should follow these simple rules

* **at last is the data that you are entering**
* **you can have as many arguments as you need**

the main point with this function is to write a function not attached to their domain but rather to be an abstract function.

---
# *Composition*
Alternate approach
Another approach is to use the compose and pipe functions.

compose function
compose function takes any number of functions and invokes them all one after the other:
this is an example for this composition usage.
```javascript
import {curry} from "rambda";
// function composition of any number of functions
const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x); 
const double = x => x * 2
const square = x => x * x

// function composition
var output_final = compose(square, double)(2);
console.log(output_final);
```

# Functors
Following the mathematical definition, and relating in the programing world in a very simple way, functors are a mapping using a function f(x) (or composite function f(g(x)) for instance) on a category A generating a category B, creating a new image, respecting the morphism. In other words, is any object we can map and apply a function generating another object instance of the same type and connections.
Let’s check an example:



```javascript

[1, 2, 3].map(val => val * 2); //generates [2, 4, 6]


```

# Monads
Definition
Monads are more complicated to explain, but I’ll try to make a parallel on what we know, and using a description given by 
Eric Elliott
:
Functions map: a => b which lets you compose functions of type a => b
Functors map with context: Functor(a) => Functor(b), which lets you compose functions F(a) => F(b)
Flatten and map with context: Monad(Monad(a)) => Monad(b), which lets you compose lifting functions a => F(b)
So, the monad basically is a functor but with the special power to unwrap any value from its context using the flatMap. Arrays are monads as you can flat then:

So, the monad basically is a functor but with the special power to unwrap any value from its context using the flatMap. Arrays are monads as you can flat then:


```javascript

[ "H", ["e"], ["l"], ["l"], "o"].flat();
// returns ["H", "e", "l", "l", "o"]
And flatMap then:
[1, [2], 3].flatMap(val => val * 2)
// returns [2, 4, 6]

```
as you can seethe monad removes all the context from the array and gets its core value , this is specially handy when you are dealing with a series of functions that may return a different context or wrapped values, by instance if you are creating a functor with a async process you may not be able to access the value in the map function that the functor provides, in that case you would rather use a monad and flatmap to get the core value of the stream.

# Task Monad

Task monad is the functional equivalent of promise. Similarly to promise, Task takes resolve and reject functions, but in reversed order. A Task monad only starts running once it reaches the fork method, and this way avoids race conditions. This allows you to create a sort of async handler without using a promise explicitly

## Task Monad Example

```javascript
import {Task} from "types";
const t1 = Task((rej,res)=>res(2)).map((two =>two + 1)).map(three =>three *2))

t1.fork(console.error,console.log))



```
another example of the usage of this in a async way
```javascript

const {prop} = require('ramda')

const httpGet = url => new Task((reject, resolve) => {
    request(url, (err, data) => { err? reject(err) : resolve(data)})
})

const myTask = httpGet('http://example.com/data.json')
    .map(JSON.parse)
    .map(prop('url'))
    .chain(httpGet)
    .map(JSON.parse)

myTask.fork( //the request isn't sent until we call .fork
    err => console.error(err),
    data => renderData(data)
)

```




