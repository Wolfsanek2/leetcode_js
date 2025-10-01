const { findDifference } = require('.');

test('nums1 = [1,2,3], nums2 = [2,4,6] => [[1,3],[4,6]]', () => {
	expect(findDifference([1, 2, 3], [2, 4, 6])).toEqual([
		[1, 3],
		[4, 6],
	]);
});

test('nums1 = [1,2,3,3], nums2 = [1,1,2,2] => [[3],[]]', () => {
	expect(findDifference([1, 2, 3, 3], [1, 1, 2, 2])).toEqual([[3], []]);
});
