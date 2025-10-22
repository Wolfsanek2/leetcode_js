// There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

// A province is a group of directly or indirectly connected cities and no other cities outside of the group.

// You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

// Return the total number of provinces.

/**
 * @param {number[][]} isConnected
 * @param {Set} visited
 * @param {number} start
 * @return {number}
 */
function dfs(isConnected, visited, start) {
	const stack = [isConnected[start]];
	while (stack.length) {
		const currentConnections = stack.pop();
		for (let i = currentConnections.length - 1; i >= 0; i--) {
			if (currentConnections[i] && !visited.has(i)) {
				stack.push(isConnected[i]);
				visited.add(i);
			}
		}
	}
}

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
	const visited = new Set();
	let result = 0;
	isConnected.forEach((_, node) => {
		if (!visited.has(node)) {
			dfs(isConnected, visited, node);
			result++;
		}
	});
	return result;
};

module.exports = { findCircleNum };
