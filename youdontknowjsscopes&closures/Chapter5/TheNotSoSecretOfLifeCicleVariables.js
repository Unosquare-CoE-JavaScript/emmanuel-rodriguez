/* .

This chapter starts with the hoisting and how it can run functions before intialization and this term is called 
hoisting , when a variable with var is initialized it will have the value of undefined and be setted at the top of the scope
you could also have something like the following

greeting = "Hello";
console.log(greeting); // "Hello";
var greeting = "Howdy";


as we said earlier the default value for var would be undefined and we will have access to modified it inmediately


another big thing to remember is that you dont have a variable re declaration, thats because it will not execute anything because
there is not such thing as redeclaration of a variable inside the same scope so it will not execute anything

*/