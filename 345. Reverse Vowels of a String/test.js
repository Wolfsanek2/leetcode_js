const { reverseVowels } = require('./main.js');

test('IceCreAm => AceCreIm', () => {
	expect(reverseVowels('IceCreAm')).toBe('AceCreIm');
});

test('leetcode => leotcede', () => {
	expect(reverseVowels('leetcode')).toBe('leotcede');
});
