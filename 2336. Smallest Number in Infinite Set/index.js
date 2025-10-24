// You have a set which contains all positive integers [1, 2, 3, 4, 5, ...].

// Implement the SmallestInfiniteSet class:

// SmallestInfiniteSet() Initializes the SmallestInfiniteSet object to contain all positive integers.
// int popSmallest() Removes and returns the smallest integer contained in the infinite set.
// void addBack(int num) Adds a positive integer num back into the infinite set, if it is not already in the infinite set.

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

var SmallestInfiniteSet = function () {
	this.minheap = new MyHeap();
	this.minheap.add(1);
	this.nums = new Set([1]);
	this.removed = new Set();
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function () {
	const value = this.minheap.pop();
	this.nums.delete(value);
	let nextValue = value + 1;
	while (this.removed.has(nextValue)) {
		nextValue++;
	}
	if (!this.nums.has(nextValue)) {
		this.minheap.add(nextValue);
		this.nums.add(nextValue);
	}
	this.removed.add(value);
	return value;
};

/**
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function (num) {
	if (!this.removed.has(num)) {
		return;
	}
	this.nums.add(num);
	this.removed.delete(num);
	this.minheap.add(num);
};

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */

module.exports = { SmallestInfiniteSet };
