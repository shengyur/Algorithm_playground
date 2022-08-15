// class 实现单项链表
class Node{
    constructor(value,next = null){
        this.value = value
        this.next = next
    }
}

function ListNode(){
    const head = new Node(1)
    head.next = new Node(3)
    head.next.next = new Node(5)
    head.next.next.next = new Node(7)

    let p = head,result = ''

    while(p){
        result += ` ${p.value}=>`
        p = p.next
    }

    result += 'null'

    console.log(result)
}

ListNode()