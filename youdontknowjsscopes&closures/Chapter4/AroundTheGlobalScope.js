/*

This Chapter is all about how the global scope matters and its being deliver to the browser, it includes different types of usage
depending on how all the setup is done, you may bundle everything and then in that big javascript file , then you you would have a separation of scopes
having a closure per module. or you may only use ES export modules and only load everything you need from those modules

These are just some examples of where a global scope is used inside the browser

JS exposes its built-ins:
–primitives:undefined,null,Infinity,NaN–natives:Date(),Object(),String(), etc.–
global functions:eval(),parseInt(), etc.
–namespaces:Math,Atomics,JSON
–friends of JS:Intl,WebAssembly•The environment hosting the JS engine exposes its ownbuilt-ins:
–console(and its methods)–
the DOM (window,document, etc)–
timers (setTimeout(..), etc)–
web platform APIs:navigator,history, geoloca-tion, WebRTC, etc.


This is important if you may want a global available reference you may want to use globalThis
*/