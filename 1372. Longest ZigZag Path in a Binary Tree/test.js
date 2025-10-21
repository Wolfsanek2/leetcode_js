const { longestZigZag, TreeNode } = require('.');

test('root = [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1] => 3', () => {
	const root = new TreeNode(
		1,
		null,
		new TreeNode(
			1,
			new TreeNode(1),
			new TreeNode(
				1,
				new TreeNode(1, null, new TreeNode(1, null, new TreeNode(1))),
				new TreeNode(1),
			),
		),
	);
	expect(longestZigZag(root)).toEqual(3);
});
