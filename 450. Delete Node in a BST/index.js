// Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

// Basically, the deletion can be divided into two stages:

// Search for a node to remove.
// If the node is found, delete the node.

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
 * @param {number} val
 * @param {TreeNode} parent
 * @return {[TreeNode, TreeNode]}
 */
var searchBST = function (root, val, parent = null) {
	if (!root) {
		return [null, parent];
	}
	if (val === root.val) {
		return [root, parent];
	} else if (val < root.val) {
		return searchBST(root.left, val, root);
	} else {
		return searchBST(root.right, val, root);
	}
};

/**
 * @param {TreeNode} root
 * @param {TreeNode} node
 * @returns {TreeNode}
 */
function siftDown(root, node) {
	if (!node) {
		return;
	}
	if (node.val < root.val) {
		if (!root.left) {
			root.left = node;
			return;
		}
		siftDown(root.left, node);
	} else {
		if (!root.right) {
			root.right = node;
			return;
		}
		siftDown(root.right, node);
	}
}

/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
	const [nodeToDelete, parent] = searchBST(root, key);

	if (!nodeToDelete) {
		return root;
	}

	const leftChild = nodeToDelete.left;
	const rightChild = nodeToDelete.right;

	let nodeToReplace = null;
	let sibling = null;
	if (!leftChild) {
		nodeToReplace = rightChild;
	} else {
		nodeToReplace = leftChild;
		sibling = rightChild;
	}

	if (parent) {
		let isLeftChild = parent.left === nodeToDelete;
		if (isLeftChild) {
			parent.left = nodeToReplace;
		} else {
			parent.right = nodeToReplace;
		}
	} else {
		root = nodeToReplace;
	}

	siftDown(nodeToReplace, sibling);

	return root;
};
