var promise = new Promise(function (fulfill, reject) {
    fulfill("I FIRED");
    reject(new Error("I DID NOT FIRE"));
});

promise.then(console.log, onReject);

function onReject(error) {
    console.log(error.message);
}