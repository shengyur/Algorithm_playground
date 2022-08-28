const Stack = require('../stack_class')
// 用两个栈来实现队列

class MyQueue {
    constructor() {
        this.popStack = [] // 出栈
        this.pushStack = [] // 入栈
    }

    push(e) {
        this.pushStack.push(e)
    }

    pop() {
        if(this.popStack.length) {
            return this.popStack.pop()
        }
        if(!this.pushStack.length) return false

        while(this.pushStack.length){
            this.popStack.push(this.pushStack.pop())
        }

        return this.popStack.pop()
    }

    peek() {
        if(this.popStack.length) {
            return this.popStack[this.popStack.length -1]
        }

        if(!this.pushStack.length) return false

        while(this.pushStack.length){
            this.popStack.push(this.pushStack.pop())
        }
        return this.popStack[this.popStack.length -1]
    }

    empty() {
        return this.popStack.length === 0 && this.pushStack.length === 0
    }
}

const arr = ["MyQueue", "push", "push", "peek", "push", "empty"]
const action = [[], [1], [2], [], [8], []]

const result = new MyQueue()

for(let i = 0;i<arr.length;i++) {
    switch(arr[i]){
        case 'push':
            result.push(action[i][0]);
            break;
        case 'peek':
            console.log('peek',result.peek());
            break;
        case 'pop':
            console.log('peek',result.pop());
            break;
        case 'empty':
            console.log(result.empty());
            break;
        default:
            //
            break;
    }
}

let resultStr = ''
while(!result.empty()){
    resultStr += `${result.pop()},`
}

console.log('resultStr', resultStr)