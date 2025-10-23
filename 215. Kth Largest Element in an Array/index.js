// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Can you solve it without sorting?

class MyHeap {
	constructor() {
		this.array = [];
	}

	add(value) {
		this.array.push(value);
		this.siftUp(this.array.length - 1);
	}

	pop() {
		const value = this.array[0];
		this.array[0] = this.array.pop();
		this.siftDown(0);
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
		if (current < parent) {
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
			indexToSwap =
				leftChild < rightChild ? leftChildIndex : rightChildIndex;
		}
		if (
			this.array[indexToSwap] !== undefined &&
			current > this.array[indexToSwap]
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
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
	const heap = new MyHeap();
	nums.forEach((value) => {
		heap.add(value);
		if (heap.size > k) {
			heap.pop();
		}
	});
	return heap.top;
};

module.exports = { findKthLargest };
