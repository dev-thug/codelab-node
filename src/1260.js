"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
let inputs = [];
let lines = 0;
let n, m, v;
class GraphNode {
    constructor(value) {
        this.neighbors = [];
        this.visited = false;
        this.resetVisited = () => {
            this.visited = false;
        };
        this.addNeighbor = (neighbor) => {
            this.neighbors.push(neighbor);
        };
        this.getNeighbors = () => {
            return this.neighbors.sort((a, b) => b.value - a.value);
        };
        this.getNeighborsAsc = () => {
            return this.neighbors.sort((a, b) => a.value - b.value);
        };
        this.value = value;
    }
}
let recursiveResult = "";
const recursiveDfs = (startNode) => {
    if (startNode.visited)
        return;
    startNode.visited = true;
    recursiveResult += `${startNode.value} `;
    for (const neighbor of startNode.getNeighborsAsc()) {
        recursiveDfs(neighbor);
    }
};
const dfs = (startNode) => {
    const stack = [];
    stack.push(startNode);
    let result = "";
    while (stack.length > 0) {
        const currentNode = stack.pop();
        // console.log("Pop", currentNode.value);
        if (!currentNode.visited) {
            currentNode.visited = true;
            for (const neighbor of currentNode.getNeighbors()) {
                if (!neighbor.visited) {
                    stack.push(neighbor);
                    // console.log("Push", neighbor.value);
                }
            }
            result += `${currentNode.value} `;
        }
    }
    console.log(result.trim());
};
const bfs = (startNode) => {
    const queue = [];
    queue.push(startNode);
    let result = "";
    while (queue.length > 0) {
        const currentNode = queue.shift();
        // console.log("shift", currentNode.value);
        if (!currentNode.visited) {
            currentNode.visited = true;
            result += `${currentNode.value} `;
            for (const neighbor of currentNode.getNeighborsAsc()) {
                if (!neighbor.visited) {
                    queue.push(neighbor);
                    //   console.log("push", neighbor.value);
                }
            }
        }
    }
    console.log(result.trim());
};
const solution = (inputs) => {
    const inputEdges = new Map();
    inputs.slice(1, inputs.length).forEach((e) => {
        const parts = e.split(" ");
        if (!inputEdges.has(+parts[0])) {
            inputEdges.set(+parts[0], []);
        }
        inputEdges.set(+parts[0], [...inputEdges.get(+parts[0]), +parts[1]]);
    });
    const nodes = Array.from({ length: n }, (_, i) => new GraphNode(i + 1));
    for (const [key, value] of inputEdges) {
        for (const v of value) {
            nodes[key - 1].addNeighbor(nodes[v - 1]);
            nodes[v - 1].addNeighbor(nodes[key - 1]);
        }
    }
    dfs(nodes[v - 1]);
    console.log(recursiveResult.trim());
    nodes.forEach((e) => e.resetVisited());
    bfs(nodes[v - 1]);
};
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    inputs.push(line);
    lines++;
    [n, m, v] = inputs[0].split(" ").map((e) => +e);
    if (lines >= m + 1) {
        rl.close();
        return [n, m, v];
    }
}).on("close", () => {
    solution(inputs);
    process.exit();
});
