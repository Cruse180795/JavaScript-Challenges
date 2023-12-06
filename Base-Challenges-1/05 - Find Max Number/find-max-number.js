function findMaxNumber(numbers) {
    let maxValue = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > maxValue) {
            maxValue = numbers[i];
        }
    }

    return maxValue;
}

module.exports = findMaxNumber;
