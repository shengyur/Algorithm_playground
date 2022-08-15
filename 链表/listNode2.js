// 双数组实现单向链表
function ListNode2() {
    const data = [] // 存放数据的数组
    const next = [] // 存放指针，存放下一个节点的下标

    // 在 data 数组 index 位置的节点后面，插入新的节点，新节点的 index 是key,值是value

    function addNode(index,key,value){
        data[key] = value
        // TODO: 理解这里的思路
        next[key] = next[index]
        next[index] = key
    }

    let head = 3
    data[3] = 'a';

    addNode(3,5,'b')
    addNode(5,7,'c')
    addNode(7,2,'d')
    addNode(2,1,'e')
    addNode(7,4,'f')

    let p = head,result = '';

    while(p) {
        result += `${data[p]}  ->`
        p = next[p]
    }

    result += 'null'
    console.log(result)
}

ListNode2()