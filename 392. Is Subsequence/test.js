const { isSubsequence } = require('./main');

test('s = "abc", t = "ahbgdc" => true', () => {
	expect(isSubsequence('abc', 'ahbgdc')).toBe(true);
});

test('s = "axc", t = "ahbgdc" => false', () => {
	expect(isSubsequence('axc', 'ahbgdc')).toBe(false);
});

test('s = "aaaaaa", t = "bbaaaa" => false', () => {
	expect(isSubsequence('aaaaaa', 'bbaaaa')).toBe(false);
});
