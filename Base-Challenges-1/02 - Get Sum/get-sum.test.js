const getSum = require('./get-sum');

test('Return the sum of a + b', () => {
    const result = getSum(10, 10);
    expect(result).toBe(20);
});
