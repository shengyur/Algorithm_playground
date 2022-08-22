class Queue {
    constructor() {
        //控制队列大小
        this.end = 0;
        // 帮助追踪第一个元素？
        this.first = 0;
        this.items = {}
    }
    // 入队
    enqueue(ele){
        this.items[this.end] = ele
        this.end++
    }

    // 出队
    dequeue() {
        if(this.isEmpty()){
            return undefined
        }

        const result = this.items[this.first]
        delete this.items[this.firtst]
        this.first++

        return result
    }

    // 队列中的第一个元素（最先被添加的元素）
    peek() {
        if(this.isEmpty()){
            return undefined
        }
        return this.items[this.first]
    }

    //看队列是否为空
    isEmpty() {
        return (this.end - this.first) === 0
    }

    // 元素个数
    size(){
        return this.end - this.first 
    }

    clear() {
        this.items ={}
        this.end = 0
        this.first = 0
    }

    toString() {
        if(this.isEmpty()) return ''

        let objString = `${this.items[this.first]}`

        for(let i = this.first + 1; i< this.end;i++) {
            objString = `${objString},${this.items[i]}`
        }
        return objString
    }
}

const queue = new Queue()
console.log(queue.isEmpty())

queue.enqueue('John')
queue.enqueue('Jay')

console.log(queue.toString())

queue.enqueue('Camila')
console.log(queue.toString())

queue.dequeue()
queue.dequeue()

console.log(queue.toString())

