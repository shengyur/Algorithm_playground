class StackArr {
    constructor() {
        this.items = []
    }

    push(ele) {
        this.items.push(ele)
    }

    pop() {
        this.items.pop()
    }

    // 返回栈顶元素，不操作栈
    peek() {
        return this.items[this.items.length -1]
    }

    // 栈是否为空
    isEmpty() {
        return this.items.length === 0
    }

    // 移除栈里的所有元素
    clear() {
        this.items = []
    }

    // 返回栈里面的元素个数
    size() {
        return this.items.length
    }
}