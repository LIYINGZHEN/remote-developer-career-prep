/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = head => {
  if (head === null || head.next === null) return head;

  let prev = null;

  // null --> 1 --> 2 --> 3
  // prev   head  next
  //
  // null <-- 1 --> 2 --> 3
  //        prev   head  next

  while (head !== null) {
    const next = head.next;
    head.next = prev;
    // move variable
    prev = head;
    head = next;
  }

  return prev;
};
