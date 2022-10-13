let count = 1

console.time()

var fib = function(n) {
    count += 1
    if(n === 0 || n ===1) return n

    return fib(n-1) + fib(n-2)
}

var fib1 = function(first,second,n) {
    count += 1
    if(n <= 0){
        return n
    }
    if(n < 3) {
        return 1
    }
    if(n === 3) {
        return first + second
    }
    return fib1(second,first + second, n-1)
}

let fib2 = function(n) {
    function help(first,second,n){
        if(n <= 0){
            return n
        }
        if(n < 3) {
            return 1
        }
        if(n === 3) {
            return first + second
        }
        return help(second,first + second , n-1)
    }
    return help(1,1,n)
}

// console.log(fib1(1,1,5))
console.log(fib2(5))

console.log('count', count)

