const { removeStars } = require('.');

test('s = "leet**cod*e" => "lecoe"', () => {
	expect(removeStars('leet**cod*e')).toEqual('lecoe');
});

test('s = "erase*****" => ""', () => {
	expect(removeStars('erase*****')).toEqual('');
});
