// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

const VOWELS = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
	const vowels = Array.from(s).filter((char) => isVowel(char));
	const reversedVowels = vowels.reverse();
	let result = '';
	let counter = 0;
	for (let char of s) {
		if (isVowel(char)) {
			char = reversedVowels[counter++];
		}
		result += char;
	}
	return result;
};

/**
 * @param {string} char
 * @returns {boolean}
 */
const isVowel = (char) => {
	return VOWELS.find((value) => value === char);
};

module.exports = { reverseVowels };
