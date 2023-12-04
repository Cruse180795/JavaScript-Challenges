function countOccurrences(str, char) {
    let charCount = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            charCount++;
        }
    }

    return charCount;
}

module.exports = countOccurrences;
