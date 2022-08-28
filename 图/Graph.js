const Dictionary = require('../Dictionary/dictionary')
const Queue = require('../Queue/queue_obj')
const Stack = require('../Stack/stack_class')

class Graph {
    constructor(isDirected = false) {
        // 是否有向
        this.isDirected = isDirected
        // 图中所有顶点的 value
        this.vertices = []
        // 字典来存邻接表
        this.adjList = new Dictionary()
    }

    // 添加顶点
    addVertex(v) {
        if (!this.vertices.includes(v)) {
            this.vertices.push(v)
            this.adjList.set(v, [])
        }
    }

    // 添加指向顶点的边
    addEdge(v, w) {
        if (!this.adjList.get(v)) {
            this.addVertex(v)
        }
        if (!this.adjList.get(w)) {
            this.addVertex(w)
        }

        this.adjList.get(v).push(w)
        // 无向图，还需要添加一条 w到v的边
        if (!this.isDirected) {
            this.adjList.get(w).push(v)
        }
    }

    getVertices() {
        return this.vertices
    }

    getAdjList() {
        return this.adjList
    }

    toString() {
        let s = ''

        for (let i = 0; i < this.vertices.length; i++) {
            s += `${this.vertices[i]} -> `;
            const neighbors = this.adjList.get(this.vertices[i])

            for (let j = 0; j < neighbors.length; j++) {
                s += `${neighbors[j]} `
            }

            s += '\n'
        }

        return s
    }
}

const graph = new Graph()

const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']

for (let i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i])
}


graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')

console.log(graph.toString())

const Colors = {
    WHITE: 0, // 还没被访问
    GREY: 1, // 被访问过，但并未被探索过
    BLACK: 2, // 被访问过，且被完全探索过
}

const initializeColor = vertices => {
    const color = {}

    for(let i = 0;i< vertices.length;i++) {
        color[vertices[i]] = Colors.WHITE
    }

    return color
}

const breadthFirstSearch = (graph,startVertext,callback) => {
    const vertices = graph.getVertices()
    const adjList = graph.getAdjList()

    const color = initializeColor(vertices)
    const queue = new Queue() 

    queue.enqueue(startVertext)

    while(!queue.isEmpty()) {
        const u = queue.dequeue()
        const neighbors = adjList.get(u)
        color[u] = Colors.GREY

        for(let i = 0;i< neighbors.length; i++) {
            const w = neighbors[i]

            if(color[w] === Colors.WHITE) {
                color[w] = Colors.GREY
                queue.enqueue(w)
            }
        }

        color[u] = Colors.BLACK

        if(callback) {
            callback(u)
        }
    }
}

const printVertex = (value) =>console.log(`Visited vertex: ${value}`)

// breadthFirstSearch(graph,myVertices[0], printVertex)

const BFS = (graph,startVertext) => {
    const vertices = graph.getVertices()
    const adjList = graph.getAdjList()

    const color = initializeColor(vertices)
    const queue = new Queue() 
    const distances = {} // 当前节点到根节点的距离
    const predecessors = {} // 前溯点 用来推导出从 v 到其他每个顶点 u 的最短路径

    queue.enqueue(startVertext)

    for(let i = 0;i<vertices.length;i++) {
        distances[vertices[i]] = 0;
        predecessors[vertices[i]] = null
    }

    while(!queue.isEmpty()) {
        const u = queue.dequeue()
        const neighbors = adjList.get(u)
        color[u] = Colors.GREY

        for(let i = 0;i< neighbors.length; i++) {
            const w = neighbors[i]

            if(color[w] === Colors.WHITE) {
                color[w] = Colors.GREY
                distances[w] = distances[u] + 1
                // 前溯点（上一个节点）
                predecessors[w] = u
                queue.enqueue(w)
            }
        }

        color[u] = Colors.BLACK
    }

    return {
        distances,
        predecessors,
    }
}

const shortestPathA = BFS(graph,myVertices[0])
// console.log('shortestPathA',shortestPathA)

// myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
// distances: [A: 0, B: 1, C: 1, D: 1, E: 2, F: 2, G: 2, H: 2 , I: 3],    
// predecessors: [A: null, B: "A", C: "A", D: "A", E: "B", F: "B", G: "C", H: "D", I: "E"]

// 构建从顶点A到其他顶点的路径
const fromVertex = myVertices[0] // 'A'

for(i=1;i<myVertices.length;i++) { // 5
    const toVertex = myVertices[i] // 'E'
    const path = new Stack()

    for(
        let v = toVertex;  //'E'
        v!==fromVertex;  //  'A'
        v=shortestPathA.predecessors[v]  
    ){
        path.push(v)  // E  B  A
    }

    path.push(fromVertex); // C 
    let s = path.pop()
    while(!path.isEmpty()) {
        s+= '-' + path.pop() 
    }
    // console.log(s)

}  
// B -> A

const depthFirstSearch = (graph, callback)=> {
    const vertices = graph.getVertices()
    const adjList = graph.getAdjList()
    const color = initializeColor(vertices)

    for(let i= 0;i< vertices.length;i++) {
        if(color[vertices[i]] === Colors.WHITE) {
            depthFirstSearchVisit(vertices[i],color,adjList,callback)
        }
    }
}

const DFS = (graph)=> {
    const vertices = graph.getVertices()
    const adjList = graph.getAdjList()
    const color = initializeColor(vertices)

    const d = {} // 顶点 u 的发现时间 d[u]
    const f = {} // 当顶点 u 被标记为黑色时， u的完成探索时间
    const p = {} // 顶点 u 的前缀点 p[u]

    const time = {
        count: 0
    }

    for(let i= 0;i< vertices.length;i++) {
        f[vertices[i]] = 0
        d[vertices[i]] = 0
        p[vertices[i]] = null
    }

    for(let i= 0;i< vertices.length;i++) {
        if(color[vertices[i]] === Colors.WHITE) {
            depthFirstSearchVisit(vertices[i],color,adjList,callback)
        }
    }
}

const depthFirstSearchVisit = (u,color,adjList,callback)=> {
    color[u] = Colors.GREY

    if(callback) {
        callback(u)
    }

    const neighbors = adjList.get(u)

    for(let i = 0;i< neighbors.length;i++) {
        const w = neighbors[i]

        if(color[w] === Colors.WHITE) {
            depthFirstSearchVisit(w,color,adjList,callback)
        }
    }

    color[u] = Colors.BLACK
}

depthFirstSearch(graph, printVertex);