const { maxOperations } = require('./main');

test('nums = [1,2,3,4], k = 5 => 2', () => {
	expect(maxOperations([1, 2, 3, 4], 5)).toBe(2);
});

test('nums = [3,1,3,4,3], k = 6 => 1', () => {
	expect(maxOperations([3, 1, 3, 4, 3], 6)).toBe(1);
});

test('nums = [1,1,1,1], k = 2 => 2', () => {
	expect(maxOperations([1, 1, 1, 1], 2)).toBe(2);
});
