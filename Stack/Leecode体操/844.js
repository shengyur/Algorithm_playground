var backspaceCompare = function(s, t) {
    function getResult(s){
        const stack = []
        for(let i = 0;i<s.length;i++) {
            if(s[i] === '#'){
                stack.pop()
            }else {
                stack.push(s[i])
            }
        }
        return stack.join('')
    }

    return getResult(s) === getResult(t)
};

console.log(backspaceCompare("xywrrmp","xywrrmu#p"))