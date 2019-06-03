require("es6-promise");

function onFulfilled(value) {
    console.log(value);
}
first().then(second).then(onFulfilled);