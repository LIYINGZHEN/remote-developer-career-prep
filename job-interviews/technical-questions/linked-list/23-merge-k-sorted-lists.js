/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if (!lists || lists.length === 0) return [];

  // loop each element in the lists
  const nodes = [];

  // O(n * m) => O(n * m) => O(n)
  for (let i = 0; i < lists.length; i++) {
    let head = lists[i];
    while (head) {
      const node = head;
      head = head.next;
      node.next = null;
      nodes.push(node);
    }
  }

  nodes.sort((a, b) => a.val - b.val);

  // link all the node together
  const root = nodes[0];
  let head = nodes[0];

  // O(n)
  for (let i = 1; i < nodes.length; i++) {
    head.next = nodes[i];
    head = nodes[i];
  }

  return root || [];
};
