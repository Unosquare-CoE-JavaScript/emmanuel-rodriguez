/** 
 * 
 * In this chapter talks about the scope chaining and how it really works in practiced, this reflects the contrast of how it was
 * taught before , because in the last chapter we came to the conclusion that there was a conversation back and forth 
 * between the compiler and the scope manager , this process however seems to be a little bit different
 * making all the scopes information inside the Abastract syntax tree it resembles to which level of scope it belongs
 * and this information is already available instead of continuing asking the scope manager.
 *
 * Another important thing to consider is shadowing and hot it works in javascript, normally you would something like a variable
 * trying to access a scope with the same name but at a different level , this does not only seem to work but there is a reasong and ways to shadow a variable
 * by instance shadowing can happend throught the global scope, in this case if you want to access a global variable
 * you can do that by calling the -- Window -- property this is an exception and will only work with a global , but if you try
 * to use this trick with a variable that is not accessible thorught a different scope, you would not have the access to that variable reference
 * 
 * in order to force the shadow you may want to copy the value of this variable but you would not have the same reference.
 * 
 * 
 * The scope chain is called about the natural way of hierarchy between the different scopes levels 
 * 
*/