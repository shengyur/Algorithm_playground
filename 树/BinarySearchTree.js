const Node = require('./Node.js')
const Compare = require('../util').Compare
const defaultCompare = require('../util').defaultCompare

console.log('defaultCompare',defaultCompare)

class BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn
        this.root = null
    }
    // 向树插入一个新键
    insert(key){
        if(this.root === null){
            this.root = new Node(key)
        } else {
            this.insertNode(this.root,key)
        }
    }

    insertNode(node,key) {
        if(this.compareFn(key,node.key) === Compare.LESS_THAN){
            if(node.left === null){
                node.left = new Node(key)
            }else{
                this.insertNode(node.left,key)
            }
        } else {
            if(node.right === null) {
                node.right = new Node(key)
            } else {
                this.insertNode(node.right,key)
            }
        }
    }
    
    inOrderTraverseNode(node,callback) {
        // 递归基线条件
        if(node !== null) {
            // 访问左子节点
            this.inOrderTraverseNode(node.left,callback)
            // 操作根节点
            callback(node.key)
            // 访问右子节点
            this.inOrderTraverseNode(node.right,callback)
        }
    }

    preOrderTraverseNode(node,callback) {
        if(node !== null) {
            // 操作根节点
            callback(node.key)
            // 访问左子节点
            this.preOrderTraverseNode(node.left,callback)
            // 访问右子节点
            this.preOrderTraverseNode(node.right,callback)
        }
    }

    postOrderTraverseNode(node,callback) {
        if(node !== null) {
             
             // 访问左子节点
             this.postOrderTraverseNode(node.left,callback)
             // 访问右子节点
             this.postOrderTraverseNode(node.right,callback)
             // 操作根节点
             callback(node.key)
        }
    }

    search(key) {
        return this.searchNode(this.root,key)
    }

    searchNode(node,key) {
        if(node === null) {
            return false
        }

        if(this.compareFn(key ,node.key) === Compare.LESS_THAN) {
            return this.searchNode(node.left, key)
        } else if(this.compareFn(key ,node.key) === Compare.BIGGER_THAN) {
            return this.searchNode(node.right,key)
        } else {
            return true
        }
    }

    // 中序遍历
    inOrderTraverse(callback) {
        this.inOrderTraverseNode(this.root,callback)
    }
    // 先序遍历
    preOrderTraverse(callback) {
        this.preOrderTraverseNode(this.root,callback)
    }
    // 后序遍历
    postOrderTraverse(callback) {
        this.postOrderTraverseNode(this.root,callback)
    }

    min(){
        return this.minNode(this.root)
    }

    minNode() {
        let current = node

        while(current !== null && current.left !== null) {
            current = current.left
        }
        return current
    }

    max() {
        let current = node

        while(current !== null && current.right !== null) {
            current = current.right
        }
        return current
    }

    remove(key) {
        this.root = this.removeNode(this.root,key)
    }

    removeNode(node,key){

    }
}

const tree = new BinarySearchTree()
tree.insert(11);
tree.insert(7);   
tree.insert(15);  
tree.insert(5); 
tree.insert(3);
tree.insert(9); 
tree.insert(8); 
tree.insert(10); 
tree.insert(13); 
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);

tree.insert(6);



const printNode = (value) => console.log(value)

// tree.postOrderTraverse(printNode)

console.log(tree.search(1) ? 'Key 1 found.' : 'Key 1 not found.'); 
console.log(tree.search(8) ? 'Key 8 found.' : 'Key 8 not found.');

module.exports = BinarySearchTree