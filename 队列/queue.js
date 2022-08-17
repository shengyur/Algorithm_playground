// 普通队列
// 先进先出，从尾部插入，从头部弹出


class Queue {
    constructor(n){
        this.arr = new Array(n)
        // 头指针
        this.head = 0;
        // 尾指针 指向最后一个元素的下一个位置
        this.tail = 0;
    }
}
// 入队
Queue.prototype.enqueue = function(val) {
    if(this.full()) return

    this.arr[this.tail] = val
    this.tail ++
}
// 出队
Queue.prototype.dequeue = function() {
    if(this.empty()) return 

    this.head += 1
}
// 查看队首元素
Queue.prototype.front = function(){
    if(this.empty()) return 

    return this.arr[this.head]
}
// 返回队列是否占满
Queue.prototype.full = function(){
    return this.arr.length === this.tail
}

// 队列是否是空的
Queue.prototype.empty = function(){
    return this.head === this.tail
}

// 队列中元素的个数
Queue.prototype.size = function(){
    return this.tail - this.head
}

// 输出队列的结构
Queue.prototype.output = function(){
    return this.arr.slice(this.head,this.tail)
}



function test(opts,vals) {
    let queue = new Queue(5)

    for(let i=0;i< opts.length;i++){
        switch(opts[i]){
            case 'insert':
                queue.enqueue(vals[i]);
                break;
            case 'front':
                console.log(`front element: ${queue.front()}`);
                break;
            case 'dequeue':
                queue.dequeue();
                break;
            case 'size':
                console.log(`queue.size(): ${queue.size()}`)
                break;
            default:
                break;
        }

        console.log(queue.output())
    }
}

const opts = ['insert','insert','insert','front','insert','insert','insert','dequeue']
const vals = [1,2,3,'',5,7,9]

test(opts,vals)