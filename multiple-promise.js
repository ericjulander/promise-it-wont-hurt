require("es6-promise");

function all(promise1, promise2) {
    var promise = new Promise((fulfil, reject) => {
        var counter = 0;

        function iterate() {
            counter++;
            if (counter === 2) {
                promise1.then(value => {
                    promise2.then(value2 => {
                        fulfil([value, value2]);
                    })
                });
            }
        }
        promise1.then(iterate);
        promise2.then(iterate);

    });
    return promise;
}

all(getPromise1(), getPromise2()).then(console.log);