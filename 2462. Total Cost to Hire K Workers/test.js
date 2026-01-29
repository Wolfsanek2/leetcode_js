const { totalCost } = require('.');

test('costs = [17,12,10,2,7,2,11,20,8], k = 3, candidates = 4 => 11', () => {
	expect(totalCost([17, 12, 10, 2, 7, 2, 11, 20, 8], 3, 4)).toEqual(11);
});

test('costs = [1,2,4,1], k = 3, candidates = 3 => 4', () => {
	expect(totalCost([1, 2, 4, 1], 3, 3)).toEqual(4);
});
