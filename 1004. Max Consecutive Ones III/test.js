const { longestOnes } = require('.');

test('nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2 => 6', () => {
	expect(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)).toBe(6);
});

test('nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3 => 10', () => {
	expect(
		longestOnes(
			[0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
			3,
		),
	).toBe(10);
});

test('nums = [0,0,1,1,1,0,0], k = 0 => 3', () => {
	expect(longestOnes([0, 0, 1, 1, 1, 0, 0], 0)).toBe(3);
});

test('nums = [0,0,0,0], k = 0 => 0', () => {
	expect(longestOnes([0, 0, 0, 0], 0)).toBe(0);
});
