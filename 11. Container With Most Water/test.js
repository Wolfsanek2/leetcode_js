const { maxArea } = require('./main');

test('[1,8,6,2,5,4,8,3,7] => 49', () => {
	expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
});

test('[1,1] => 1', () => {
	expect(maxArea([1, 1])).toBe(1);
});
