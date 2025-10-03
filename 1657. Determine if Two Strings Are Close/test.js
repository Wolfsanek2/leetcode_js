const { closeStrings } = require('.');

test('word1 = "abc", word2 = "bca" => true', () => {
	expect(closeStrings('abc', 'bca')).toBe(true);
});

test('word1 = "a", word2 = "aa" => false', () => {
	expect(closeStrings('a', 'aa')).toBe(false);
});

test('word1 = "cabbba", word2 = "abbccc" => true', () => {
	expect(closeStrings('cabbba', 'abbccc')).toBe(true);
});

test('word1 = "abc", word2 = "abcdd" => false', () => {
	expect(closeStrings('abc', 'abcdd')).toBe(false);
});
