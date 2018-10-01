/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

// head = [1, 2, 3, 4, 5], n = 2
// slow = [0, 1, 2, 3, 4, 5]
// fast = [0, 1, 2, 3, 4, 5]
const removeNthFromEnd = (head, n) => {
  if (head === null || n === 0) return head;

  const dummy = new ListNode(0);
  dummy.next = head;

  let slow = dummy;
  let fast = dummy;

  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  while (fast.next !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return dummy.next;
};
