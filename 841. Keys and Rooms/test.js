const { canVisitAllRooms } = require('.');

test('rooms = [[1],[2],[3],[]] => true', () => {
	expect(canVisitAllRooms([[1], [2], [3], []])).toEqual(true);
});

test('rooms = [[1,3],[3,0,1],[2],[0]] => false', () => {
	expect(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]])).toEqual(false);
});
