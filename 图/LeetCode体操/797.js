function allPathsSourceTarget(graph) {
    // 记录路径
    const stack = []
    // 结果数组
    const result = []

    const dfs = (graph,x,n)=> {
        if(x === n) {
            result.push(stack.slice())
            return 
        }

        for(const y of graph[x]){ 
            // 添加节点 y 到路径
            stack.push(y)
            // 递归相邻节点
            dfs(graph,y,n)
            // 从路径移除节点 y
            stack.pop() 
        }
    }

    stack.push(0)

    dfs(graph, 0, graph.length -1)

    return result
    
}




const graph = [[1,2],[3],[3],[]]

// output : [[0,1,3],[0,2,3]]
console.log(allPathsSourceTarget(graph))