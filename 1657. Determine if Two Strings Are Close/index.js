// Two strings are considered close if you can attain one from the other using the following operations:

// Operation 1: Swap any two existing characters.
// For example, abcde -> aecdb
// Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
// For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
// You can use the operations on either string as many times as necessary.

// Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
	const set1 = new Set(word1);
	const set2 = new Set(word2);
	if ([...set1].filter((value) => !set2.has(value)).length) {
		return false;
	}
	const map1 = {};
	for (const char of word1) {
		if (!map1[char]) {
			map1[char] = 0;
		}
		map1[char]++;
	}
	const map2 = {};
	for (const char of word2) {
		if (!map2[char]) {
			map2[char] = 0;
		}
		map2[char]++;
	}
	const counts1 = Object.values(map1).reduce((map, count) => {
		if (!map[count]) {
			map[count] = 0;
		}
		map[count]++;
		return map;
	}, {});
	const counts2 = Object.values(map2).reduce((map, count) => {
		if (!map[count]) {
			map[count] = 0;
		}
		map[count]++;
		return map;
	}, {});
	const countsArr1 = Object.entries(counts1);
	const countsArr2 = Object.entries(counts2);
	if (countsArr1.length !== countsArr2.length) {
		return false;
	}
	for (const [count1, value1] of countsArr1) {
		if (counts2[count1] !== value1) {
			return false;
		}
	}
	return true;
};

module.exports = { closeStrings };
