require("es6-promise");
const http = require("q-io/http");
var requestObject = {
    host: "localhost",
    port: "7000",
    method: "GET"
};

function getItemFromResponseObject(res) {
    var contents = [];
    res.body.forEach(function (a) {
        contents.push(a.toString());
    });
    return (contents[0]);
}

http.request(requestObject).then(function (res) {
    var id = (getItemFromResponseObject(res));
    return id;
}).then(function (id) {
    requestObject.path = "/" + id;
    requestObject.port = "7001";
    return http.request(requestObject);
}).then(function (response) {
    var userData = getItemFromResponseObject(response);
    return JSON.parse(userData);
}).then(console.log).catch(console.log);