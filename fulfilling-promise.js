var promise = new Promise((fulfil, reject) => {
    setTimeout(() => {
        fulfil("FULFILLED!")
    }, 300);
});
promise.then(console.log);