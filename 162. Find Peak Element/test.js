const { findPeakElement } = require('.');

test('nums = [1,2,3,1] => 2', () => {
	expect(findPeakElement([1, 2, 3, 1])).toEqual(2);
});

test('nums = [1,2,1,3,5,6,4] => 5', () => {
	expect(findPeakElement([1, 2, 1, 3, 5, 6, 4])).toEqual(5);
});
