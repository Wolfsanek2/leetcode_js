// You are given an array of variable pairs equations and an array of real numbers values, where equations[i] = [Ai, Bi] and values[i] represent the equation Ai / Bi = values[i]. Each Ai or Bi is a string that represents a single variable.

// You are also given some queries, where queries[j] = [Cj, Dj] represents the jth query where you must find the answer for Cj / Dj = ?.

// Return the answers to all queries. If a single answer cannot be determined, return -1.0.

// Note: The input is always valid. You may assume that evaluating the queries will not result in division by zero and that there is no contradiction.

// Note: The variables that do not occur in the list of equations are undefined, so the answer cannot be determined for them.

/**
 * @param {Map<string, object[]>} connections
 * @param {string} from
 * @param {string} to
 * @returns {number}
 */
function dfs(connections, from, to) {
	if (!connections.has(from)) {
		return -1;
	}
	const stack = [{ node: from, value: 1 }];
	const visited = new Set([from]);
	while (stack.length) {
		const { node, value: currentValue } = stack.pop();
		if (node === to) {
			return currentValue;
		}
		connections
			.get(node)
			.reverse()
			.forEach(({ next, value }) => {
				if (!visited.has(next)) {
					visited.add(next);
					stack.push({ node: next, value: currentValue * value });
				}
			});
	}
	return -1;
}

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
	const connections = new Map();
	equations.forEach(([from, to], index) => {
		if (!connections.has(from)) {
			connections.set(from, []);
		}
		if (!connections.has(to)) {
			connections.set(to, []);
		}
		connections.get(from).push({ next: to, value: values[index] });
		connections.get(to).push({ next: from, value: 1 / values[index] });
	});

	return queries.map(([from, to]) => dfs(connections, from, to));
};

module.exports = { calcEquation };
