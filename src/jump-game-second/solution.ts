export function jump(nums: number[]): number {
    const graph = new Graph();
    return graph.findShortestPathLength(nums);
}

class Graph {
    private adjacencyList: {
        [index: number]: number[];
    };

    constructor() {
        this.adjacencyList = {};
    }

    findShortestPathLength(nums: number[]) {
        this.fillGraph(nums);
        return this.findShortestPath(0, nums.length - 1).length;
    }

    private fillGraph(nums: number[]) {
        nums.forEach((maxStepSize, index) => {
            for (let stepSize = 1; stepSize <= maxStepSize && stepSize + index < nums.length; stepSize++) {
                this.addEdge(index, index + stepSize);
            }
        });
    }

    // Add an undirected edge between two vertices
    private addEdge(vertex1: number, vertex2: number) {
        this.addVertex(vertex1);
        this.adjacencyList[vertex1].push(vertex2);

        this.addVertex(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    private addVertex(vertex: number) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    // BFS to find the shortest path in an unweighted graph
    private findShortestPath(start: number, end: number) {
        if (start === end) return [start];

        const queue: [number] = [start]; // Queue for BFS
        const visited = new Set<number>(); // Set to track visited nodes
        const parent: { [index: number]: number } = {}; // Parent map to reconstruct the path

        visited.add(start);

        while (queue.length > 0) {
            const current = queue.shift() || 0; // Dequeue the current node

            // Check if we've reached the target
            if (current === end) {
                return this.reconstructPath(parent, start, end);
            }

            // Explore all the neighbors of the current node
            for (let neighbor of this.adjacencyList[current]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    parent[neighbor] = current; // Set the parent of the neighbor
                    queue.push(neighbor); // Enqueue the neighbor
                }
            }
        }

        return []; // Return empty array if no path is found
    }

    // Helper function to reconstruct the path from the parent map
    private reconstructPath(parent: { [index: number]: number }, start: number, end: number) {
        const path = [end];
        let current = end;

        // Backtrack from the end node to the start node using the parent map
        while (current !== start) {
            current = parent[current];
            path.push(current);
        }

        return path.reverse(); // Reverse the path to get the correct order
    }
}