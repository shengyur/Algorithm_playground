var merge = function(nums1, m, nums2, n) {
    const result = []
    let i = 0
    let j = 0
    // 只要任意一个还没有到头
    while(i < m || j < n){
        // 处理出界的场景
        // 什么时候要 i ? j 出界 或者 (i j 都没出界 且 nums1[i]更小)
        if(j >= n || ( i<m && nums1[i] <= nums2[j])){
            result.push(nums1[i])
            i++
        }else {
        // 什么时候要j ? i 出界  或者 i j都没出界且 nums2[j]更小
            result.push(nums2[j])
            j++
        }
    }

    return result
};

console.log(
    merge(
        [1,2,3,0,0,0],
        3,
        [2,5,6],
        3
    )
)
// 不额外开数组，那么要利用 nums1 的数组空间，从后往前放数字就好
var merge2 = function(nums1, m, nums2, n) {
    let i=m-1
    let j=n-1

    // 数组里面一共多少项？
    // 过滤器思想: 要什么？什么时候要？
    for(let k=m+n-1;k>0;k--){
        // 考虑数组的边界情况:什么时候要nums1[i] ?
        // j越界了 或者 j 和 i都没越界并且nums1[i] 更大
        if(j<0 || (i>=0 &&nums1[i] >= nums2[j])){
            nums1[k] = nums1[i]
            i--
        } else {
            nums1[k] = nums2[j]
            j--
        }
    }
    return nums1
};

console.log(
    merge2(
        [1,2,3,0,0,0],
        3,
        [2,5,6],
        3
    )
)