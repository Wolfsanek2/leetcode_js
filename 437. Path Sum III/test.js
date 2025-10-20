const { pathSum, TreeNode } = require('.');

test('root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8 => 3', () => {
	const root = new TreeNode(
		10,
		new TreeNode(
			5,
			new TreeNode(3, new TreeNode(3), new TreeNode(-2)),
			new TreeNode(2, null, new TreeNode(1)),
		),
		new TreeNode(-3, null, new TreeNode(11)),
	);
	expect(pathSum(root, 8)).toEqual(3);
});

test('root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22 => 3', () => {
	const root = new TreeNode(
		5,
		new TreeNode(
			4,
			new TreeNode(11, new TreeNode(7), new TreeNode(2)),
			null,
		),
		new TreeNode(
			8,
			new TreeNode(13, new TreeNode(5), new TreeNode(1)),
			new TreeNode(4),
		),
	);
	expect(pathSum(root, 22)).toEqual(3);
});

test('root = [1], targetSum = 0 => 0', () => {
	const root = new TreeNode(1);
	expect(pathSum(root, 0)).toEqual(0);
});

test('root = [0,1,1], targetSum = 0 => 0', () => {
	const root = new TreeNode(0, new TreeNode(1), new TreeNode(1));
	expect(pathSum(root, 0)).toEqual(1);
});

test('root = [1,-2,-3,1,3,-2,null,-1], targetSum = 0 => 2', () => {
	const root = new TreeNode(
		1,
		new TreeNode(-2, new TreeNode(1, new TreeNode(-1)), new TreeNode(3)),
		new TreeNode(-3, new TreeNode(-2)),
	);
	expect(pathSum(root, 0)).toEqual(2);
});

test('root = [1,-1,null,1,null,null,null,-1], targetSum = 0 => 4', () => {
	const root = new TreeNode(
		1,
		new TreeNode(-1, new TreeNode(1, new TreeNode(-1))),
	);
	expect(pathSum(root, 0)).toEqual(4);
});
