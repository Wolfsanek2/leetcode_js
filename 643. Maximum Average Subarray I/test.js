const { findMaxAverage } = require('./main');

test('nums = [1,12,-5,-6,50,3], k = 4 => 12.75000', () => {
	expect(findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toBe(12.75);
});

test('nums = [5], k = 1 => 5.00000', () => {
	expect(findMaxAverage([5], 1)).toBe(5.0);
});

test('nums = [-1], k = 1 => -1.00000', () => {
	expect(findMaxAverage([-1], 1)).toBe(-1.0);
});
