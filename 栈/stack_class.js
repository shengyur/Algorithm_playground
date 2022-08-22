class StackCls{
    constructor() {
        this.count = 0;
        this.items = {}
    }

    push(ele) {
        this.items[this.count] = ele
        this.count ++
    }

    pop() {
        if(this.isEmpty()) {return undefined}

        this.count--;

        const result = this.items[this.count]
        delete this.items[this.count]

        return result
    }

    // 返回栈顶元素，不操作栈
    peek() {
        if(this.isEmpty()) return undefined

        return this.items[this.count - 1]
    }

    // 栈是否为空
    isEmpty() {
        return this.count === 0
    }

    // 移除栈里的所有元素
    clear() {
        this.items = {}
        this.count = 0

        while(!this.isEmpty()){
            this.pop()
        }
    }

    // 返回栈里面的元素个数
    size() {
        return this.count
    }

    toString() {
        if(this.isEmpty()) return ''

        let objString = ''
        for(let i=0; i< this.count; i++) {
            objString += `${this.items[i]},`
        }

        return objString
    }
 }

//  const s = new StackCls()

//  s.push(5)
//  s.push(8)
//  s.push(10)

//  console.log(s.toString())

//  console.log(Object.getOwnPropertyNames(s))
//  console.log(Object.keys(s))
//  console.log(s.items)



 module.exports = StackCls