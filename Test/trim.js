String.prototype.trim = function() {
    return this.replace(/^\s\s*/,'').replace(/\s\s$/,'')
}

String.prototype.trim = function() {
    const str = this

    str = str.replace(/^\s+/, '')

    for(var i = str.length - 1;i>=0;i--){
        // 当前项不是空白字符
        if(/\S/.test(str.charAt(i))){
            // 只截取到不是空白字符的项
            str = str.substring(0,i+1)
            break;
        }
    }
    return str
}