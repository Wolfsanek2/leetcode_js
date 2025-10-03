// Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.

// A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).

const getKey = (arr) => arr.toString();

/**
 * @param {number[][]} grid
 * @param {number} i
 * @returns {number[]}
 */
const getCol = (grid, i) => {
	return grid.reduce((col, row) => {
		col.push(row[i]);
		return col;
	}, []);
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
	const rows = grid.reduce((map, row) => {
		if (!map.has(getKey(row))) {
			map.set(getKey(row), 0);
		}
		map.set(getKey(row), map.get(getKey(row)) + 1);
		return map;
	}, new Map());
	const cols = new Map();
	for (let i in grid) {
		const key = getKey(getCol(grid, i));
		if (!cols.has(key)) {
			cols.set(key, 0);
		}
		cols.set(key, cols.get(key) + 1);
	}
	let result = 0;
	rows.forEach((count, row) => {
		if (cols.has(row)) {
			result += count * cols.get(row);
		}
	});
	return result;
};

module.exports = { equalPairs };
