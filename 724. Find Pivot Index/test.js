const { pivotIndex } = require('.');

test('nums = [1,7,3,6,5,6] => 3', () => {
	expect(pivotIndex([1, 7, 3, 6, 5, 6])).toBe(3);
});

test('nums = [1,2,3] => -1', () => {
	expect(pivotIndex([1, 2, 3])).toBe(-1);
});

test('nums = [2,1,-1] => 0', () => {
	expect(pivotIndex([2, 1, -1])).toBe(0);
});
