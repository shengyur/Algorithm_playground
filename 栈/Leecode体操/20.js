const Stack = require('../stack_class')

console.log(Stack)

s = "(]"

function leftOf(tag) {
    if(tag === '}') return '{'
    if(tag === ')') return '('
    return '['
}

function isValid(str) {
    let left = new Stack()

    for(let i = 0;i< str.length;i++) {
        const c = str[i]
        // 左括号入栈
        if(c === '{' || c === '(' ||c === '['){
            left.push(c)
        } else{
        // 右括号，就去与栈顶左括号匹配，若是一对，就出栈
            if(!left.isEmpty() && (leftOf(c) === left.peek())) {
                left.pop()
            } else {
                return false
            }
        }
    }
    return left.isEmpty()

    
}

console.log(isValid(s))