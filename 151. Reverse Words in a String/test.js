const { reverseWords } = require('./main');

test('the sky is blue => blue is sky the', () => {
	expect(reverseWords('the sky is blue')).toBe('blue is sky the');
});

test('"  hello world  " => "world hello"', () => {
	expect(reverseWords('  hello world  ')).toBe('world hello');
});

test('"a good   example" => "example good a"', () => {
	expect(reverseWords('a good   example')).toBe('example good a');
});
