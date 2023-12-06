function reverseString(str) {
    const temp = [];

    for (let i = str.length; i >= 0; i--) {
        temp.push(str[i]);
    }

    return temp.join('');
}

module.exports = reverseString;
