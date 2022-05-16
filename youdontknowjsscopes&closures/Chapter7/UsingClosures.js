/*
we got the definition of a closure and where it should be working and some examples of it 
closure is a Closure is observed when a function uses vari-able(s) from outer scope(s) even while runningin a scope where those variable(s) wouldn’t beaccessible.


The key parts of this definition are:•Must be a function involved
•Must reference at least one variable from an outer scope
•Must be invoked in a different branch of the scope chainfrom the variable(s)


we aldo got determined that the garbage collector should only kept variables alive as long as their reference still lives inside a closure
*/ 