/*
In this module it makes a deep analisys on why you should be using named functions and avoid at all possible cost the anonymous function it has a posture about readiability issues, 
that allways puts the named function ahead of the anonymous function , this is pure readability and is always good to be part of that. by instance you may have the following example

*/

let SomeBigUnorderedArrayofNumbers = [5,4,2,1,3,5,6];
//we may want to map this array and mutate te values from the array by decreasing by 2 

SomeBigUnorderedArrayofNumbers.map( (value ) => value - 2)
//this may look like a simple approach but whe dealing with a larger function we could refactor this as the following function

SomeBigUnorderedArrayofNumbers.map(function decreaseValueFromNumber(number){
    const DECREASE_VALUE = 2;
    return (number - DECREASE_VALUE);
})
//you may want to add a step further and separate the function  a little bit more

function decreaseValueFromNumber(number) {
    const DECREASE_VALUE = 2;
    return number - (DECREASE_VALUE);
}
SomeBigUnorderedArrayofNumbers.map(decreaseValueFromNumber(number));


/*
This chapter also considers and expands a little bit more for the hoisting in a variable and functional way

and gets into currying functions

*/