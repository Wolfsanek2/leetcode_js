// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
	const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
	let currentVowels = s
		.slice(0, k)
		.split('')
		.reduce((currentVowels, char) => {
			if (vowels.has(char)) {
				currentVowels++;
			}
			return currentVowels;
		}, 0);
	let maxVowels = currentVowels;
	for (let left = 0, right = k; right < s.length; right++) {
		if (vowels.has(s[left])) {
			currentVowels--;
		}
		left++;
		if (vowels.has(s[right])) {
			currentVowels++;
		}
		if (currentVowels > maxVowels) {
			maxVowels = currentVowels;
		}
	}
	return maxVowels;
};

module.exports = { maxVowels };
