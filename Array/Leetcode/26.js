var removeDuplicates1 = function(nums) {
    let n = 0

    for(let i = 0; i< nums.length;i++){
        // 过滤器
        if(nums[i] !== nums[i-1]){
            nums[n] = nums[i]
            n++
        }        
    }

    return nums.slice(0,n)
    // 这里其实不需要去用nums获取length，因为可以直接用n。。
};

var removeDuplicates2 = function(nums){
    let n = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i == 0 || nums[i] != nums[i - 1]) {
            nums[n] = nums[i];
            n++;
        }
    }
    return n;
}

const input1 =  [0,0,1,1,1,2,2,3,3,4]
const input2 = [1,1,2]
const input3 = [1,1,1]

console.log(removeDuplicates(input3))