// You are given two 0-indexed integer arrays nums1 and nums2 of equal length n and a positive integer k. You must choose a subsequence of indices from nums1 of length k.

// For chosen indices i0, i1, ..., ik - 1, your score is defined as:

// The sum of the selected elements from nums1 multiplied with the minimum of the selected elements from nums2.
// It can defined simply as: (nums1[i0] + nums1[i1] +...+ nums1[ik - 1]) * min(nums2[i0] , nums2[i1], ... ,nums2[ik - 1]).
// Return the maximum possible score.

// A subsequence of indices of an array is a set that can be derived from the set {0, 1, ..., n-1} by deleting some or no elements.

class MyHeap {
	/**
	 * @param {Function} cmp
	 */
	constructor(cmp) {
		this.cmp = cmp ? cmp : (value1, value2) => value1 < value2;
		this.array = [];
	}

	add(value) {
		this.array.push(value);
		this.siftUp(this.array.length - 1);
	}

	pop() {
		const value = this.array[0];
		if (this.array.length === 1) {
			this.array = [];
		} else {
			this.array[0] = this.array.pop();
			this.siftDown(0);
		}
		return value;
	}

	get top() {
		return this.array[0];
	}

	get size() {
		return this.array.length;
	}

	siftUp(index) {
		const current = this.array[index];
		const parentIndex = this.getParentIndex(index);
		const parent = this.array[parentIndex];
		if (this.cmp(current, parent)) {
			this.swap(index, parentIndex);
			this.siftUp(parentIndex);
		}
	}

	siftDown(index) {
		const current = this.array[index];
		const leftChildIndex = this.getLeftChildIndex(index);
		const rightChildIndex = this.getRightChildIndex(index);
		const leftChild = this.array[leftChildIndex];
		const rightChild = this.array[rightChildIndex];

		let indexToSwap;
		if (leftChild === undefined) {
			indexToSwap = rightChildIndex;
		} else if (rightChild === undefined) {
			indexToSwap = leftChildIndex;
		} else {
			indexToSwap = this.cmp(leftChild, rightChild)
				? leftChildIndex
				: rightChildIndex;
		}
		if (
			this.array[indexToSwap] !== undefined &&
			this.cmp(this.array[indexToSwap], current)
		) {
			this.swap(index, indexToSwap);
			this.siftDown(indexToSwap);
		}
	}

	getLeftChildIndex(index) {
		return index * 2 + 1;
	}

	getRightChildIndex(index) {
		return index * 2 + 2;
	}

	getParentIndex(index) {
		return Math.floor((index - 1) / 2);
	}

	swap(index1, index2) {
		[this.array[index2], this.array[index1]] = [
			this.array[index1],
			this.array[index2],
		];
	}
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function (nums1, nums2, k) {
	const pairs = nums1.map((num1, index) => [num1, nums2[index]]);
	pairs.sort((a, b) => b[1] - a[1]);

	const minHeap = new MyHeap();
	let sum = 0;
	let maxScore = 0;

	for (const [num1, num2] of pairs) {
		minHeap.add(num1);
		sum += num1;

		if (minHeap.size > k) {
			sum -= minHeap.pop();
		}
		if (minHeap.size === k) {
			const score = num2 * sum;
			maxScore = score > maxScore ? score : maxScore;
		}
	}
	return maxScore;
};

module.exports = { maxScore };
