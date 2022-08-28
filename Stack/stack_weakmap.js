const items = new WeakMap()

class Stack {
    constructor() {
        // 实现了属性的私有，但是牺牲了可读性
        items.set(this, [])
    }

    push(ele){
        const s = items.get(this)
        s.push(ele)
    }

    pop() {
        const s = items.get(this)

        const r = s.pop()
    }
}