const { compress } = require('./main');

test('["a","a","b","b","c","c","c"] => 6, ["a","2","b","2","c","3"]', () => {
	const input = ['a', 'a', 'b', 'b', 'c', 'c', 'c'];
	expect(compress(input)).toBe(6);
	expect(input).toEqual(['a', '2', 'b', '2', 'c', '3']);
});

test('["a"] => 1, ["a"]', () => {
	const input = ['a'];
	expect(compress(input)).toBe(1);
	expect(input).toEqual(['a']);
});

test('["a","b","b","b","b","b","b","b","b","b","b","b","b"] => 4, ["a","b","1","2"]', () => {
	const input = [
		'a',
		'b',
		'b',
		'b',
		'b',
		'b',
		'b',
		'b',
		'b',
		'b',
		'b',
		'b',
		'b',
	];
	expect(compress(input)).toBe(4);
	expect(input).toEqual(['a', 'b', '1', '2']);
});
