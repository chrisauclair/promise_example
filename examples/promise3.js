

// What if I want to mix in synchronous code?

Promise.resolve().then(function() {
    if (async === true) {
        return doSomethingAsync(data);
    }

    const newData = doSomethingSync(data);
    if (!newData.prop) {
        return Promise.reject(new Error("newData must have prop!"));
    }

    return newData;
})