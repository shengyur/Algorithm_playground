// 重排链表

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
 var reorderList = function(head) {
    let stack = []

    let p = head
    let result

    while(p!== null){
        stack.push(p)
        p = p.next
    }

    p = head

    while(p!== null){
        let lastNode = stack.pop()
        let next = p.next
        // 临界条件
        if(lastNode === next || lastNode.next === next) {
            lastNode.next = null;
            break
        }
        p.next = lastNode
        lastNode.next = next
        p = next
    }
};