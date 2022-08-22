class Stack{
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
// 11/2 得5  余1
// 5/2  得2  余1
// 2/2  得1  余0
// 1/2  得0  余1

// 10进制转2进制
function decimalToBinary(decNumber){
    const base = 2
    const remStack = new Stack()
    let number = decNumber
    let rem;
    let binaryString = ''

    while(number >0){
        rem = (number % base)
        remStack.push(rem)
        number = ((number - rem)/base)
    }

    while(!remStack.isEmpty()) {
        binaryString += remStack.pop().toString()
    }

    return binaryString
}

// 10进制转任意进制
function baseConverter(decNumber,base){
    const remStack = new Stack()
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let number = decNumber
    let rem;
    let binaryString = ''

    if(!base >= 2 && base <= 36) {
        return ''
    }

    while(number > 0){
        rem = (number % base)
        remStack.push(rem)
        number = ((number - rem)/base)
    }

    while(!remStack.isEmpty()) {
        // 处理进制
        binaryString += digits[remStack.pop()]
    }

    return binaryString
}


console.log(baseConverter(100345,16))