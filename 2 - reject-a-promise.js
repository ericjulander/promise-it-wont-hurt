var promise = new Promise(function (fulfill, reject) {
    setTimeout(() => {
        reject(new Error("REJECTED!"));
    }, 300);
});

promise.then(null, onReject);

function onReject(error) {
    console.log(error.message);
}