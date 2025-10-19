// Given the head of a singly linked list, reverse the list, and return the reversed list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
	if (!head) {
		return null;
	}
	const stack = [head];
	let current = head.next;
	head.next = null;
	while (current) {
		stack.push(current);
		current = current.next;
	}
	head = stack.pop();
	current = head;
	while (stack.length) {
		const next = stack.pop();
		current.next = next;
		current = next;
	}
	return head;
};
