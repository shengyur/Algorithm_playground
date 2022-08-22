// 反转链表
// 视频参考： https://www.bilibili.com/video/BV1pt4y187q5?spm_id_from=333.337.search-card.all.click&vd_source=c113d28fac7fe24c0789db462e0fc8ea

// 递归解法
function reverse(head) {
    if(head === null || head.next === null) {
        return head
    }

    let last = reverse(head.next)

    // head.next 代表链表中的最后一个节点
    // 把最后一个节点的 next 指向倒数第二个
    head.next.next = head
    // 把倒数第二个节点的 next 指针置空
    head.next = null

    return last
}