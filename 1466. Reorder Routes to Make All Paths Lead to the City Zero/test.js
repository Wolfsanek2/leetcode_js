const { minReorder } = require('.');

test('n = 6, connections = [[0,1],[1,3],[2,3],[4,0],[4,5]] => 3', () => {
	expect(
		minReorder(6, [
			[0, 1],
			[1, 3],
			[2, 3],
			[4, 0],
			[4, 5],
		]),
	).toEqual(3);
});

test('n = 5, connections = [[1,0],[1,2],[3,2],[3,4]] => 2', () => {
	expect(
		minReorder(5, [
			[1, 0],
			[1, 2],
			[3, 2],
			[3, 4],
		]),
	).toEqual(2);
});

test('n = 3, connections = [[1,0],[2,0]] => 0', () => {
	expect(
		minReorder(3, [
			[1, 0],
			[2, 0],
		]),
	).toEqual(0);
});
