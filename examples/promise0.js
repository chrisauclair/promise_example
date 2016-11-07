
// Callback hell

doSomethingAsync(function(data, err) {
    if (err) {
        handleError(err);
    }

    doAnotherThingAsync(data, function(data, err) {
        if (err) {
            handleError(err);
        }

        console.log("I did the thing!");

        // continue callback pyramid of doom here
    });
});