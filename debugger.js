const graph = new Graph(); const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']; // {12} 
for (let i = 0; i < myVertices.length; i++) { // {13}   
    graph.addVertex(myVertices[i]);
} 
graph.addEdge('A', 'B'); // {14}  
graph.addEdge('A', 'C'); 
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');