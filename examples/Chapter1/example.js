/*

Chapter 1 

Basically the firts chapter of the book talks about general concepts of javascript
this reflects how things work in javascript and the origins that it had like Microsoft JScript and also some small quirks , it also talks about 
the different paradigms that can be used, Functional programming , Object Programming   Procedural Programming

Backwards and forward,
this chapter is about how the javascript council , took into account how changes could break javascript and how it was possible to evade this actions

strict mode, in order to use it in javascript and allow the strict mode for javascript from the first line using the line+

'use strict';

We also take a look at how javascript uses tools in order to create a backward compatibility
and that is better that the developer focuses on the new features that it has, and let the tools do the hard work to create a more compatible version of the webapp
by instance babel does and excelent work in this one


Another wrinkle is that JS engines can employ multiplepasses of JIT (Just-In-Time) processing/optimization on thegenerated code (post parsing),
 which again could reasonablybe labeled either “compilation” or “interpretation” dependingon perspective.
 It’s actually a fantastically complex situationunder the hood of a JS engine.

this chapter also talks about javascript being more sided to a compiled language rather than a scripted language however javascript is not 
100% compiled




Most strict mode controls are in the form ofearly errors,meaning errors that aren’t strictly syntax errors but are stillthrown at compile time (before the code is run). For example,strict mode disallows naming two function parameters thesame,
and results in an early error. Some other strict modecontrols are only observable at runtime
, such as howthis defaults toundefinedinstead of the global object.Rather than fighting and arguing with strict mode, like a kidwho just wants to defy whatever their parents tell them notto do, the best mindset is that strict mode is like a linterreminding you how JSshouldbe written to have the highestquality and best chance at performance. If you find yourselffeeling handcuffed, trying to work around strict mode, thatshouldbe a blaring red warning flag that youneed to back upand rethink the whole approach.



 
 Web Assembly
This section of the chapter calls the web assembly format and how it should be working  , now webassembly was first introduced in 2013
 by the mozilla team , which ported a javascript version to c  and the running it, althought this practiced  may had a security issue, this opened
 the door for a much better planed out version of webassembly code.



Strictmodecanalternativelybeturnedonper-functionscope,with exactly the same rules about its surroundings:functionsomeOperations() {// whitespace and comments are fine here"use strict";// all this code will run in strict mode}

    you can also add strict mode to a funcionStrictmodecanalternativelybeturnedonper-functionscope,with exactly the same rules about its surroundings:functionsomeOperations() {// whitespace and comments are fine here"use strict";// all this code will run in strict mode} 

these are some key concepts found in the chapter




JS is an implementation of the ECMAScript standard (versionES2019 as of this writing), which is guided by the TC39committee and hosted by ECMA. It runs in browsers andother JS environments such as Node.js.JS is a multi-paradigm language, meaning the syntax andcapabilities allow a developer to mix and match (and bendandreshape!)conceptsfromvariousmajorparadigms,
suchasprocedural,object-oriented(OO/classes),andfunctional(FP).JS is a compiled language, 
meaning the tools (including the JSengine) process and verify a program (reporting any errors!)before it executes.With our language nowdefined, 
let’s start getting to know itsins and outs.
*/
