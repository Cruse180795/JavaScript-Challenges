const countOccurrences = require('./count-occurrences');

test('Count the occurrences of a given char in a str', () => {
    expect(countOccurrences('hello', 'l')).toBe(2);
    expect(countOccurrences('programming', 'm')).toBe(2);
    expect(countOccurrences('banana', 'a')).toBe(3);
});
