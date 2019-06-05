var promise = new Promise((fulfil, reject) => {
    fulfil("PROMISE VALUE");
});
promise.then(console.log);
console.log("MAIN PROGRAM");