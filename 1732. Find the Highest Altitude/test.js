const { largestAltitude } = require('.');

test('gain = [-5,1,5,0,-7] => 1', () => {
	expect(largestAltitude([-5, 1, 5, 0, -7])).toBe(1);
});

test('gain = [-4,-3,-2,-1,4,3,2] => 0', () => {
	expect(largestAltitude([-4, -3, -2, -1, 4, 3, 2])).toBe(0);
});
