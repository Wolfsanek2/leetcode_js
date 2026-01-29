// You are given a 0-indexed integer array costs where costs[i] is the cost of hiring the ith worker.

// You are also given two integers k and candidates. We want to hire exactly k workers according to the following rules:

// You will run k sessions and hire exactly one worker in each session.
// In each hiring session, choose the worker with the lowest cost from either the first candidates workers or the last candidates workers. Break the tie by the smallest index.
// For example, if costs = [3,2,7,7,1,2] and candidates = 2, then in the first hiring session, we will choose the 4th worker because they have the lowest cost [3,2,7,7,1,2].
// In the second hiring session, we will choose 1st worker because they have the same lowest cost as 4th worker but they have the smallest index [3,2,7,7,2]. Please note that the indexing may be changed in the process.
// If there are fewer than candidates workers remaining, choose the worker with the lowest cost among them. Break the tie by the smallest index.
// A worker can only be chosen once.
// Return the total cost to hire exactly k workers.

class MyHeap {
	constructor(cmp) {
		this.array = [];
		this.cmp = cmp ? cmp : (v1, v2) => v1 < v2;
	}

	add(value) {
		this.array.push(value);
		this.siftUp(this.array.length - 1);
	}

	pop() {
		const value = this.top();
		if (this.array.length === 1) {
			this.array = [];
		} else {
			this.array[0] = this.array.pop();
			this.siftDown(0);
		}
		return value;
	}

	top() {
		return this.array[0];
	}

	siftUp(index) {
		if (!index) {
			return;
		}
		const value = this.array[index];
		const parentIndex = this.getParentIndex(index);
		const parent = this.array[parentIndex];
		if (this.cmp(parent, value)) {
			return;
		}
		this.swap(parentIndex, index);
		this.siftUp(parentIndex);
	}

	siftDown(index) {
		const value = this.array[index];
		const leftChildIndex = this.getLeftChildIndex(index);
		const rightChildIndex = this.getRightChildIndex(index);
		const leftChild = this.array[leftChildIndex];
		const rightChild = this.array[rightChildIndex];

		if (!leftChild) {
			return;
		}
		let indexToSwap = leftChildIndex;
		if (rightChild && this.cmp(rightChild, leftChild)) {
			indexToSwap = rightChildIndex;
		}
		if (this.cmp(value, this.array[indexToSwap])) {
			return;
		}
		this.swap(indexToSwap, index);
		this.siftDown(indexToSwap);
	}

	swap(index1, index2) {
		[this.array[index1], this.array[index2]] = [
			this.array[index2],
			this.array[index1],
		];
	}

	getParentIndex(index) {
		return Math.floor((index - 1) / 2);
	}

	getLeftChildIndex(index) {
		return index * 2 + 1;
	}

	getRightChildIndex(index) {
		return index * 2 + 2;
	}
}

/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function (costs, k, candidates) {
	const leftHeap = new MyHeap();
	const rightHeap = new MyHeap();
	let leftIndex = 0;
	let rightIndex = costs.length - 1;
	for (; leftIndex < candidates; leftIndex++) {
		leftHeap.add(costs[leftIndex]);
	}
	leftIndex--;
	for (
		;
		rightIndex > costs.length - candidates - 1 && rightIndex > leftIndex;
		rightIndex--
	) {
		rightHeap.add(costs[rightIndex]);
	}
	rightIndex++;
	let result = 0;
	for (let i = 0; i < k; i++) {
		const left = leftHeap.top();
		const right = rightHeap.top();
		let value;
		if (!right || left <= right) {
			value = leftHeap.pop();
			if (leftIndex < rightIndex - 1) {
				leftHeap.add(costs[++leftIndex]);
			}
		} else {
			value = rightHeap.pop();
			if (leftIndex < rightIndex - 1) {
				rightHeap.add(costs[--rightIndex]);
			}
		}
		result += value;
	}
	return result;
};

module.exports = { totalCost };
