//Objects and references
/*
In this chapter we saw how when using a primitive variable it holds its own copy but its when using a more complex type that it may lead
to undicered manipulations
*/

let name = "juan";
let otherName = name;
name = "raul";
console.log(name);
console.log(otherName);

let houseDirection = {street: "street", city: "city"}
let myHouseDirection = houseDirection;
myHouseDirection = {street:"unosquare", city:"guadalajara"};

/*
In this chapter we also saw the distinctive ways to create a function and wheter or not you should try to create a anonymous function
the author says that if a function exist then it has a purpose and by that logic you should have a nave that describes the function behavior

*/