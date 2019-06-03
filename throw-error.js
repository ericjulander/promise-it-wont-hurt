require("es6-promise");
var invalidJSON = process.argv[2];

function parsePromise(json) {
    var parse = new Promise((fulfil, reject) => {
        try {
            var newJSON = JSON.parse(json);
            fulfil(newJson);
        } catch (e) {
            reject(e.message);
        }
    });
    return parse;
}

parsePromise(invalidJSON).then(null, console.log);