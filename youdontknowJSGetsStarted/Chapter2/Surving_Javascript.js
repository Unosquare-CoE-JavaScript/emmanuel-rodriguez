
const element = "Bienvenido a coderunner";
console.log(element);
console.log("AAAAAAAAAAAA");
//there are different ways to set a string value in javascript
// normally " or ' would´t matter and are only stylish, the other one which is ´ this is not stylish but gives the value a way to be parsed"
/* A template literal, it is a way to concat strings in a better way */
const value2 = "bad way";
const  value = "using concat sucks";
const value3 = value + value2;
const betterString = `the current value should be  ${value3}`



// this is an important usecase of typeof , and it can lead to some pretty bad problems

/*
For distinguishing values, thetypeofoperator tells you itsbuilt-in type, if primitive, or"object"otherwise:typeof42;// "number
"typeof"abc";// "string"
typeoftrue;// "boolean"typeofundefined;
// "undefined"typeofnull;//
 "object" -- oops, bug!typeof{"a":1};// "object"typeof[1,2,3];// "object"typeoffunctionhello(){};// "function"

*/ 
const resultComp = typeof null === Object // "object" this can be a very bad bug 



const constantValue = "this should not change";
let localscopeVariable = "this may change but it should only affect the localscopeVariable"
var badVariableGlobalScope = "This variable should be accesible throught the whole app which is bads";


function myClassicFunction(parameter)
{
 console.log(" a classic function is declared");   
}

let fnVariable = function variableFn (parameter){};
fnVariable();


/*
HOW TO COMPARE USING ===
3===3.0;// true"yes"==="yes";// truenull===null;// truefalse===false;// true42==="42";// false"hello"==="Hello";// falsetrue===1;// false0===null;// false""===null;// falsenull===undefined;// false
*/



/*
[1,2,3]===[1,2,3];// false
{ a:42}==={ a:42}// false
(x => x*2)===(x => x*2)// false
this is the flaw of the === operator, when used in a more subjective way things forces to use other ways to compare two values depending    
*/

/*in Javascript everything is an object*/

/*
How We Organize in JSTwo major patterns for organizing code (data and behavior)
areusedbroadlyacrosstheJSecosystem:classesandmodules.
These patterns are not mutually exclusive; many programscan and do use both. 
Other programs will stick with just onepattern, or even neither!In some respects, 
these patterns are very different. But in-terestingly, in other ways, 
they’re just different sides of thesame coin. 
Being proficient in JS requires understanding bothpatterns and where they are appropriate (and not!).
*/


// example of class
/* A Notebook has a collection of Page objects */

class Page{
   constructor(text){
       this.text = text;
   } 
   print()
   {
       console.log(this.text);
   }
}

class Notebook {
    constructor()
    {
        this.pages = [];
    }

    addPage (text)
    {
        var Page = new Page(text);
        this.pages.push(page);   
    }

    print(){
        for(let page of this.pages){
            page.print();
        }
    }
}
/* Creating a new instance of the Notebook class and adding two pages to it. */
var mathNotes = new Notebook();
mathNotes.addPage("Arithmetic: + - * / ...");
mathNotes.addPage("Trigonometry: sin cos tan ...");
mathNotes.print();


/*
Class Inheritance
*/

/* *|CURSOR_MARCADOR|* */

/* A class is a blueprint for creating objects with pre-defined properties and methods */
class Publication {
    constructor(title,author,pubDate)
    {
        this.title = title;
        this.author = author;
        this.pubDate = pubDate;
    }
    print()
    {
        console.log(`Title ${this.title} author ${this.author} pubDate: ${this.pubDate}`)
    }
}

/* The Book class extends the Publication class, and adds a publisher and ISBN number */
class Book extends Publication
{
    constructor(bookdetails){
        super(bookdetails.title, bookdetails.author, bookdetails.pubDate)
        this.publisher = bookdetails.publisher;
        this.ISBN = bookdetails.ISBN;
    }

    print()
    {
        super.print();
        console.log(this.ISBN);

    }
}

//ESM OR EXPORTING MODULES are singletons based which means that there is only one in existence at a time when executing this modules
