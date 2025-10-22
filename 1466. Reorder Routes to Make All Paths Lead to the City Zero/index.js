// There are n cities numbered from 0 to n - 1 and n - 1 roads such that there is only one way to travel between two different cities (this network form a tree). Last year, The ministry of transport decided to orient the roads in one direction because they are too narrow.

// Roads are represented by connections where connections[i] = [ai, bi] represents a road from city ai to city bi.

// This year, there will be a big event in the capital (city 0), and many people want to travel to this city.

// Your task consists of reorienting some roads such that each city can visit the city 0. Return the minimum number of edges changed.

// It's guaranteed that each city can reach city 0 after reorder.

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, connections) {
	const connectionsMap = new Map();
	const reversedConnectionsMap = new Map();
	connections.forEach(([from, to]) => {
		if (!connectionsMap.has(from)) {
			connectionsMap.set(from, []);
		}
		if (!reversedConnectionsMap.has(to)) {
			reversedConnectionsMap.set(to, []);
		}
		connectionsMap.get(from).push(to);
		reversedConnectionsMap.get(to).push(from);
	});

	let result = 0;
	const visited = new Set([0]);
	const stack = [0];
	while (stack.length) {
		const current = stack.pop();
		let children = [];
		if (connectionsMap.has(current)) {
			result += connectionsMap
				.get(current)
				.filter((to) => !visited.has(to)).length;
			children.push(...connectionsMap.get(current));
		}
		if (reversedConnectionsMap.has(current)) {
			children.push(...reversedConnectionsMap.get(current));
		}

		for (let i = children.length; i >= 0; i--) {
			if (!visited.has(children[i])) {
				stack.push(children[i]);
				visited.add(children[i]);
			}
		}
	}
	return result;
};

module.exports = { minReorder };
