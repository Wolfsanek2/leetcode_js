const { findKthLargest } = require('.');

test('nums = [3,2,1,5,6,4], k = 2 => 5', () => {
	expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toEqual(5);
});

test('nums = [3,2,3,1,2,4,5,5,6], k = 4 => 4', () => {
	expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toEqual(4);
});

test('nums = [2,10,8,7,5,4,3,9,6,0,1], k = 9 => 2', () => {
	expect(findKthLargest([2, 10, 8, 7, 5, 4, 3, 9, 6, 0, 1], 9)).toEqual(2);
});
