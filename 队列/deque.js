class Deque {
    constructor() {
        this.end = 0;
        this.first = 0;
        this.items = {}
    }

    addFront(ele) {
        this.end ++
    }

    addEnd(ele){

    }

    removeFront() {

    }

    removeBack() {

    }

    peekFront() {

    }

    peekBack() {

    }

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