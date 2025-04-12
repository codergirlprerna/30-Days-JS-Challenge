//Graph(Optional)
//task9:Graph class implement karna hai.ek graph class bnao jisme:vertices add karne ka method ho,edges add karne ka method ho,breadth first search karne k method ho
class Graph{
    constructor(){
        this.adjacencyList={};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=[];
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]) this.addVertex(vertex1);
        if(!this.adjacencyList[vertex2]) this.addVertex(vertex2);

        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    bfs(start){
        const queue=[start];
        const visited={};
        visited[start]=true;

        while(queue.length>0){
            const vertex=queue.shift();
            console.log(vertex);

            for(let neighbour of this.adjacencyList[vertex]){
                if(!visited[neighbour]){
                    visited[neighbour]=true;
                    queue.push(neighbour);
                }
            }
        }
    }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A","B");
graph.addEdge("A","C");
graph.addEdge("B","C");
console.log("BFS Start from A");
graph.bfs("A");


//task10:jo graph class bnayi hai uska use karke ek simple network represent karo aur bfs perform karke do nodes ke beech shortest path dhundoo.
class Graphs{
    constructor(){
        this.adjacencyList={};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=[];
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]) this.addVertex(vertex1);
        if(!this.adjacencyList[vertex2]) this.addVertex(vertex2);

        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    bfsShortetPath(start,end){
        const queue=[[start]];
        const visited=new Set();

        while(queue.length>0){
            const path=queue.shift();
            const node=path[path.length-1];
            if(!visited.has(node)){
                visited.add(node);
                if(node==end){
                    return path;
                }
                for(let neighbour of this.adjacencyList[node]){
                    const newPath =[...path,neighbour];
                    queue.push(newPath);
                }
            }
        }
        return null;
    }
}

const network=new Graphs();
network.addEdge("A","B");
network.addEdge("A","C");
network.addEdge("B","D");
network.addEdge("C","E");
network.addEdge("D","F");
network.addEdge("E","F");

const path=network.bfsShortetPath("A","F");
if(path){
    console.log("Shortest path from A to F:",path.join("->"));
}else{
    console.log("No path found between A and F");
}