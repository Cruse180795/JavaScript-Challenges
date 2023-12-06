const reverseString = require('./reverse-string');

test('Reversing a string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('world')).toBe('dlrow');
    expect(reverseString('12345')).toBe('54321');
});
