const { longestSubarray } = require('.');

test('nums = [1,1,0,1] => 3', () => {
	expect(longestSubarray([1, 1, 0, 1])).toBe(3);
});

test('nums = [0,1,1,1,0,1,1,0,1] => 5', () => {
	expect(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1])).toBe(5);
});

test('nums = [1,1,1] => 2', () => {
	expect(longestSubarray([1, 1, 1])).toBe(2);
});
