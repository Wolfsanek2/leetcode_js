const { maxScore } = require('.');

test('["nums1 = [1,3,3,2], nums2 = [2,1,3,4], k = 3 => 12', () => {
	expect(maxScore([1, 3, 3, 2], [2, 1, 3, 4], 3)).toEqual(12);
});

test('["nums1 = [4,2,3,1,1], nums2 = [7,5,10,9,6], k = 1 => 30', () => {
	expect(maxScore([4, 2, 3, 1, 1], [7, 5, 10, 9, 6], 1)).toEqual(30);
});
