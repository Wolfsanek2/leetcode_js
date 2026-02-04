const { successfulPairs } = require('.');

test('spells = [5,1,3], potions = [1,2,3,4,5], success = 7 => [4,0,3]', () => {
	expect(successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7)).toEqual([4, 0, 3]);
});

test('spells = [3,1,2], potions = [8,5,8], success = 16 => [2,0,2]', () => {
	expect(successfulPairs([3, 1, 2], [8, 5, 8], 16)).toEqual([2, 0, 2]);
});
