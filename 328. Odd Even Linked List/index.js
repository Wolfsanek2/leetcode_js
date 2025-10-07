// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

// The first node is considered odd, and the second node is even, and so on.

// Note that the relative order inside both the even and odd groups should remain as it was in the input.

// You must solve the problem in O(1) extra space complexity and O(n) time complexity.

function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
	if (!head) {
		return null;
	}
	if (!head.next) {
		return head;
	}
	const oddHead = head;
	const evenHead = head.next;
	head.next = null;
	let oddTail = oddHead;
	let evenTail = null;
	let current = evenHead;
	let index = 2;
	while (current) {
		if (index % 2) {
			oddTail.next = current;
			oddTail = current;
		} else {
			if (!evenTail) {
				evenTail = current;
			} else {
				evenTail.next = current;
				evenTail = current;
			}
		}
		current = current.next;
		index++;
	}
	evenTail.next = null;
	oddTail.next = evenHead;
	return head;
};
