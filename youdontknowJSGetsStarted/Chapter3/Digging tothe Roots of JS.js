//Iterators 

//ES6 ITERATOR IMPLEMENTATION
var iterator = [1,2,3,4,5,6,7];
for (value in iterator) {
    console.log(`the current value is ${value}`);
}


//Since Array are iterables we can shallow-copy  an array using iterator consuption  via the ... operator

var copyIterator = [...iterator]

//Another use for the iterator is the way we may want to iterate a whole object

let buttonMap =  new Map();

buttonMap.set("foo","bar");
buttonMap.set("foo2","bar2");

for(let [key,value] of buttonMap)
{
    console.log(key,value);
}
// in order to just use the values of the map we only need to add buttonMap.values()
// if we just want to add the entries of the map we need to add the buttonMap.entries()



//linkage of objects and prototypes
//when creating a prototypes of a new object you should get a reference to the object and get all its properties working accordingly
//this may seem like some time of heritage but its not really

let homework = {topic:"js"};
let otherHomework = Object.create(homework);