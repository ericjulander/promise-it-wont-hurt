require("es6-promise");

function alwaysThrows() {
    throw new Error("OH NOES").message;
}

function iterate(iterator) {
    console.log(iterator);
    return iterator + 1;
}

var promise = Promise.resolve(1);
promise
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(null, console.log);