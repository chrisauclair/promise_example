
// Cleaned up version of promise0.js

doSomethingAsync.then(function(data) {
    return doAnotherThingAsync(data);
}).then(function(data) {
    console.log("I did the thing!");
}).catch(function(e) {
    handleError(e);
})