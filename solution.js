var numbers = [-10, 3, 0, 15, 4, 1];
var k = 20;

function addsToSumOfK(numbers, k) {
    var missingPairs = [];
    for (var i in numbers) {
        if (missingPairs.includes(numbers[i])) {
            return true;
        }
        missingPairs.push(k - numbers[i]);
    }
    return false;
}

console.log(addsToSumOfK(numbers, k));