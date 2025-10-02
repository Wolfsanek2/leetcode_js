const { uniqueOccurrences } = require('.');

test('arr = [1,2,2,1,1,3] => true', () => {
	expect(uniqueOccurrences([1, 2, 2, 1, 1, 3])).toBe(true);
});

test('arr = [1,2] => false', () => {
	expect(uniqueOccurrences([1, 2])).toBe(false);
});

test('arr = [-3,0,1,-3,1,1,1,-3,10,0] => true', () => {
	expect(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])).toBe(true);
});
