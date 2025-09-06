const { maxVowels } = require('.');

test('s = "abciiidef", k = 3 => 3', () => {
	expect(maxVowels('abciiidef', 3)).toBe(3);
});

test('s = "aeiou", k = 2 => 2', () => {
	expect(maxVowels('aeiou', 2)).toBe(2);
});

test('s = "leetcode", k = 3 => 2', () => {
	expect(maxVowels('leetcode', 3)).toBe(2);
});

test('s = "weallloveyou", k = 7 => 4', () => {
	expect(maxVowels('weallloveyou', 7)).toBe(4);
});
