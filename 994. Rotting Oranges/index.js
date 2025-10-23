// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

function cellToStr([row, col]) {
	return `${row}-${col}`;
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
	const rows = grid.length;
	const cols = grid[0].length;

	const orangesTotal = grid.reduce((sum, row) => {
		return row.reduce((sum, cell) => {
			if (cell) {
				return sum + 1;
			}
			return sum;
		}, sum);
	}, 0);

	const getNext = ([row, col]) => {
		const result = [];
		if (col) {
			result.push([row, col - 1]);
		}
		if (col < cols - 1) {
			result.push([row, col + 1]);
		}
		if (row) {
			result.push([row - 1, col]);
		}
		if (row < rows - 1) {
			result.push([row + 1, col]);
		}
		return result.filter(([row, col]) => grid[row][col] !== 0);
	};

	let maxDistance = 0;
	let start = [];
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			if (grid[i][j] === 2) {
				start.push([i, j]);
			}
		}
	}
	if (!start.length) {
		if (!orangesTotal) {
			return 0;
		}
		return -1;
	}
	let oranges = start.length;
	const queue = [...start];
	const visited = new Set(start.map((cell) => cellToStr(cell)));
	const distance = new Map();
	start.forEach((cell) => distance.set(cellToStr(cell), 0));
	while (queue.length) {
		const current = queue.shift();
		maxDistance = Math.max(maxDistance, distance.get(cellToStr(current)));
		getNext(current).forEach((next) => {
			if (!visited.has(cellToStr(next))) {
				oranges++;
				visited.add(cellToStr(next));
				queue.push(next);
				distance.set(
					cellToStr(next),
					distance.get(cellToStr(current)) + 1,
				);
			}
		});
	}
	if (oranges === orangesTotal) {
		return maxDistance;
	}
	return -1;
};

module.exports = { orangesRotting };
