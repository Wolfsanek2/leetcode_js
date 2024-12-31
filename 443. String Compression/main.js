// Given an array of characters chars, compress it using the following algorithm:
// Begin with an empty string s. For each group of consecutive repeating characters in chars:
// If the group's length is 1, append the character to s.
// Otherwise, append the character followed by the group's length.
// The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.
// After you are done modifying the input array, return the new length of the array.
// You must write an algorithm that uses only constant extra space.

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
	const newChars = [];
	let prev;
	let counter = 0;
	chars.forEach((value) => {
		if (value !== prev) {
			if (prev !== undefined && counter > 1) {
				newChars.push(...counter.toString().split(''));
			}
			newChars.push(value);
			counter = 0;
		}
		counter++;
		prev = value;
	});
	if (counter > 1) {
		newChars.push(...counter.toString().split(''));
	}
	chars.length = newChars.length;
	Object.assign(chars, newChars);
	return newChars.length;
};

module.exports = { compress };
