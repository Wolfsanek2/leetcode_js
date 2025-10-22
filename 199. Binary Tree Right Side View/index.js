// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 */
const bfs = (root) => {
	const result = [];
	const queue = [[root, 1]];
	let [latestNode, latestDepth] = queue[0];
	while (queue.length) {
		const [node, depth] = queue.shift();
		if (!node) {
			continue;
		}
		if (depth > latestDepth) {
			result.push(latestNode.val);
		}
		latestNode = node;
		latestDepth = depth;
		queue.push([node.left, depth + 1]);
		queue.push([node.right, depth + 1]);
	}
	result.push(latestNode.val);
	return result;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
	if (!root) {
		return [];
	}
	return bfs(root);
};
