const { moveZeroes } = require('./main');

test('[0,1,0,3,12] => [1,3,12,0,0]', () => {
	const input = [0, 1, 0, 3, 12];
	moveZeroes(input);
	expect(input).toEqual([1, 3, 12, 0, 0]);
});

test('[0] => [0]', () => {
	const input = [0];
	moveZeroes(input);
	expect(input).toEqual([0]);
});
