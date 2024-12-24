// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).
// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
	const divisors1 = findStringDivisors(str1);
	const divisors2 = findStringDivisors(str2);
	const commonDivisors = [];
	divisors1.forEach((divisor) => {
		(divisor === '' || divisors2.find((str) => str === divisor)) &&
			commonDivisors.push(divisor);
	});
	return commonDivisors.at(-1);
};

/**
 * @param {string} str
 * @returns {string[]}
 */
const findStringDivisors = (str) => {
	const result = [''];
	for (let i = 0; i < str.length; i++) {
		const substr = str.slice(0, i + 1);
		isSubstringDivisor(str, substr) && result.push(substr);
	}
	return result;
};

/**
 * @param {string} str
 * @param {string} substr
 * @returns {boolean}
 */
const isSubstringDivisor = (str, substr) => {
	if (!substr) {
		return true;
	}
	let tmp = substr;
	while (tmp.length <= str.length) {
		if (tmp === str) {
			return true;
		}
		tmp += substr;
	}
	return false;
};

module.exports = { gcdOfStrings };
