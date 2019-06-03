require("es6-promise");

function attachTitle(name) {
    return "DR. " + name;
}
var promise = new Promise(function (fulfil, reject) {
    fulfil("MANHATTAN");
});
promise.then(attachTitle).then(console.log);