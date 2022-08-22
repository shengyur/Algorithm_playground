// https://leetcode.cn/problems/linked-list-cycle/

// 快慢指针
var hasCycle = function(head) {
    if(!head) return false

    let slow = head,fast = head

    while(fast!== null && fast.next !== null){
        slow = head.next
        fast = fast.next.next

        if(slow === fast){
            return true
        }
    }

    return false
}

// 进阶版：如果链表中含有环，如何计算环的起点？
