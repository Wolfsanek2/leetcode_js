const { orangesRotting } = require('.');

test('grid = [[2,1,1],[1,1,0],[0,1,1]] => 4', () => {
	expect(
		orangesRotting([
			[2, 1, 1],
			[1, 1, 0],
			[0, 1, 1],
		]),
	).toEqual(4);
});

test('grid = [[2,1,1],[0,1,1],[1,0,1]] => -1', () => {
	expect(
		orangesRotting([
			[2, 1, 1],
			[0, 1, 1],
			[1, 0, 1],
		]),
	).toEqual(-1);
});

test('grid = [[0,2]] => 0', () => {
	expect(orangesRotting([[0, 2]])).toEqual(0);
});

test('grid = [[0,2,2]] => 0', () => {
	expect(orangesRotting([[0, 2, 2]])).toEqual(0);
});
