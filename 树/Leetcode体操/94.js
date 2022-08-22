function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


var inorderTraversal = function(root) {
    const result = []
    
    function inOrderTraverseNode(node) {
        // 递归基线条件
        if(node !== null) {
            // 访问左子节点
            inOrderTraverseNode(node.left)
            // 操作根节点
            result.push(node.val)
            // 访问右子节点
            inOrderTraverseNode(node.right)
        }
    }


    return inOrderTraverseNode(root)
};