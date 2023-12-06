function calculator(valueA, valueB, operator) {
    switch (operator) {
        case '+':
            return valueA + valueB;
            break;
        case '-':
            return valueA - valueB;
            break;
        case '*':
            return valueA * valueB;
            break;
        case '/':
            return valueA / valueB;
            break;
        default:
            throw new Error('Invalid Operator');
            break;
    }
}

module.exports = calculator;
