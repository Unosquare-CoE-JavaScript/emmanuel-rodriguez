/*
This Chapter talks aboutlexical scope and how we determine wheter or not a code belongs to certain parts of the scope
to find out the code is segmented into tokens and the given to a abastract syntax tree which then a kind of scope manager determines
wheter or not that code belongs to the same scope that is being used at the moment
you can check this out during page 27 

when working with a nested scope the way you can think of is just like a hotel and a floor , in which the current scope is current level and the global scope
is the top floor , if a variable or method is not defind on the current scope it will ask the outer scope to check if it has the variable all the way until the global scope, however
if you ask for a variable in a scope that has some inner scopes it will not ask the inner scopes it only goes one way , and is from the inside to the outside

*/