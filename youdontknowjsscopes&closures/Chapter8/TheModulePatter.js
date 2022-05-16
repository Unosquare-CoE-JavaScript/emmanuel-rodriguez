/*
The module pattern
the module pattern is described as a a way to encapsulate all the hidden information behind the scenes it also lets them know that you are going to be using a certain part
of a section and this is showcase by instance in the frontend approach to solve this things out

then it tells you what is a module and more importantly what isnt a module, just because you are grouping a variable and functions in it doesnt mean that you are restricting the 
visibility of a module.


Classic Module Definition
So to clarify what makes something a classic module:
•There must be an outer scope, typically from a modulefactory function running at least once.
•The module’s inner scope must have at least one piece ofhidden information that represents state for the module.
•The module must return on its public API a referenceto at least one function that has closure over the hiddenmodule state (so that this state is actually preserved).
You’ll likely run across other variations on this classic moduleapproach, which we’ll look at in more detail in Appendix A.


there are several ways to achieve this encapsulation but the ES module format is a good practiced and approach to use it



*/ 