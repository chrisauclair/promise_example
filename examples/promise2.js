
// What if a library uses traditional callbacks?

new Promise(function(resolve, reject) {
    doSomethingAsync(function(data, err) {
        if (err) {
            reject();
        }

        resolve(data);
    })
}).then(function(resolvedData) {
    console.log("I did the thing!");
}).catch(function(e) {
    handleError(e);
})