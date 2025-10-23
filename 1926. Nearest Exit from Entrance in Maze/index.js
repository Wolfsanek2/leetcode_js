// You are given an m x n matrix maze (0-indexed) with empty cells (represented as '.') and walls (represented as '+'). You are also given the entrance of the maze, where entrance = [entrancerow, entrancecol] denotes the row and column of the cell you are initially standing at.

// In one step, you can move one cell up, down, left, or right. You cannot step into a cell with a wall, and you cannot step outside the maze. Your goal is to find the nearest exit from the entrance. An exit is defined as an empty cell that is at the border of the maze. The entrance does not count as an exit.

// Return the number of steps in the shortest path from the entrance to the nearest exit, or -1 if no such path exists.

function cellToStr([row, col]) {
	return `${row}-${col}`;
}

/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function (maze, entrance) {
	const rows = maze.length;
	const cols = maze[0].length;
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
		return result.filter(([row, col]) => maze[row][col] === '.');
	};

	const queue = [entrance];
	const visited = new Set([cellToStr(entrance)]);
	const distance = new Map();
	distance.set(cellToStr(entrance), 0);
	while (queue.length) {
		const current = queue.shift();
		if (
			(current[0] === 0 ||
				current[0] === rows - 1 ||
				current[1] === 0 ||
				current[1] === cols - 1) &&
			distance.get(cellToStr(current))
		) {
			return distance.get(cellToStr(current));
		}
		getNext(current).forEach((next) => {
			if (!visited.has(cellToStr(next))) {
				visited.add(cellToStr(next));
				queue.push(next);
				distance.set(
					cellToStr(next),
					distance.get(cellToStr(current)) + 1,
				);
			}
		});
	}
	return -1;
};

module.exports = { nearestExit };
