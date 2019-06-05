function iterate(index) {
    if (index >= 2)
        return Promise.reject(new Error(`The index ${index}, is too big!`));
    console.log(index);
    return index + 1;
}

function handleError(err) {
    console.log(err.message);
};

var iterator = Promise.resolve(0);
iterator
    .then(iterate) // 0
    .then(iterate) // 1
    .then(iterate) // Error should throw here
    .then(iterate) // this shouldn't be called
    .catch(handleError);