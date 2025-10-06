// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

// The test cases are generated so that the length of the output will never exceed 105.

function isNumber(str) {
	if (typeof str !== 'string') return false;
	return !isNaN(str) && !isNaN(parseFloat(str));
}

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
	const stack = [];
	for (const char of s) {
		if (char === ']') {
			let repeatingString = '';
			for (let value = stack.pop(); value !== '['; value = stack.pop()) {
				repeatingString = value + repeatingString;
			}
			let count = '';
			let current = stack.pop();
			while (current) {
				count = current + count;
				if (isNumber(stack.at(-1))) {
					current = stack.pop();
				} else {
					current = '';
				}
			}
			count = parseInt(count);
			stack.push(repeatingString.repeat(count));
			continue;
		}
		stack.push(char);
	}
	return stack.join('');
};

module.exports = { decodeString };
