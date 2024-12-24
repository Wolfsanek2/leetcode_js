const { gcdOfStrings } = require('./index.js');

test('ABCABC and ABC: ABC', () => {
	expect(gcdOfStrings('ABCABC', 'ABC')).toBe('ABC');
});

test('ABABAB and ABAB: AB', () => {
	expect(gcdOfStrings('ABABAB', 'ABAB')).toBe('AB');
});

test("LEET and CODE: ''", () => {
	expect(gcdOfStrings('LEET', 'CODE')).toBe('');
});
