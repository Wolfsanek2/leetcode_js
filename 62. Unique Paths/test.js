const { uniquePaths } = require('.');

test('m = 3, n = 7 => 28', () => {
	expect(uniquePaths(3, 7)).toBe(28);
});
