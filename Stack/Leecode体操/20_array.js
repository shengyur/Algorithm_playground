/**
 * @param {string} s
 * @return {boolean}
 */

function leftOf(tag) {
    if (tag === '}') return '{'
    if (tag === ')') return '('
    return '['
}

var isValid = function (str) {
    let left = []

    for (let i = 0; i < str.length; i++) {
        const c = str[i]

        if (c === '[' || c === '{' || c === '(') {
            left.push(c)
        } else {
            if (left.length !== 0 && (leftOf(c) === left[left.length - 1])) {
                left.pop()
            } else {
                return false
            }
        }
    }

    return left.length === 0
}

const s = '{]'

console.log(isValid(s))