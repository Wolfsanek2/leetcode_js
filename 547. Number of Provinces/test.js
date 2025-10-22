const { findCircleNum } = require('.');

test('isConnected = [[1,1,0],[1,1,0],[0,0,1]] => 2', () => {
	expect(
		findCircleNum([
			[1, 1, 0],
			[1, 1, 0],
			[0, 0, 1],
		]),
	).toEqual(2);
});

test('isConnected = [[1,0,0],[0,1,0],[0,0,1]] => 3', () => {
	expect(
		findCircleNum([
			[1, 0, 0],
			[0, 1, 0],
			[0, 0, 1],
		]),
	).toEqual(3);
});
