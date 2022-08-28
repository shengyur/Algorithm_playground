const { defaultCompare } = require("../util");

class MinHeap {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn
        this.heap = []
    }

    getLeftIndex(index) {
        return 2*index + 1
    }

    getRightIndex(index){
        return 2*index + 2
    }

    getParentIndex(index){
        if(index === 0) return undefined

        return Math.floor((index-1)/2)
    }

    insert(value) {
        if(value !== null){
            this.heap.push(value)
            this.siftUp(this.heap.length -1)
            return true
        }
        return false
    }
    //移除最小值或者最大值，并返回这个值
    extract() {

    }
    // 找到最小值或者最大值，但是不移除
    findMinimum() {

    }
}