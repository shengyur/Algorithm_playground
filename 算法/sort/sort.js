
function swap(array,a,b) {
    [array[a],array[b]] = [array[b],array[a]]
}

 
function bubbleSort(array) {
    const {length} = array

    for(let i=0;i<length;i++) {
        console.log('I => ',i)
        for(let j=0;j<length -1 -i;j++) {
            console.log('J => ',j)
            if(array[j] > array[j+1]){
                swap(array,j,j+1)
                console.log('array', array)
            }
        }
    }
    return array
}

function selectSort(array) {
    const length = array.length
    let indexMin

    for(let i=0;i < length -1;i++) {
        indexMin = i
        
        for(let j=i;j< length; j++) {
            if(array[j] < array[indexMin]) {
                indexMin = j
            }
        }

        if(i !== indexMin) {
            swap(array,i,indexMin)
        }
    }

    return array
}

function insertionSort(array) {
    const len = array.length

    // 从第一项开始，默认第0项已经排序
    for(let i=1;i<len;i++) {
        let j = i;
        temp = array[i]

        while(j>0 && (temp < array[j - 1])) {
            // 与前一项交换位置
            array[j] = array[j -1]
            j--
        }

        array[j] = temp
    }

    return array
}

function merge(left,right) {
    let i = 0;
    let j = 0;
    const result = []

    while(i< left.length && j < right.length){
        result.push(left[i] < right[j] ? left[i++] : right[j++])
    }

    return result.concat(i< left.length ? left.slice(i) : right.slice(j))
}

function mergeSort(array) {
    // 将大数组转换成小数组，直到其中只有一个项
    if(array.length >1) {
        const length = array.length
        const middle = Math.floor(length / 2)

        const left = mergeSort(array.slice(0,middle))
        const right = mergeSort(array.slice(middle,length))

        array = merge(left,right)
    }
    return array
}


let array = [2,5,4,3,10,1,7,6]

console.log(mergeSort(array))