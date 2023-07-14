"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
let inputs = [];
let lines = 0;
class GraphNode {
    constructor(value) {
        this.neighbors = [];
        this.visited = false;
        this.addNeighbor = (neighbor) => {
            this.neighbors.push(neighbor);
        };
        this.value = value;
    }
}
const dfs = (node) => {
    if (node.visited)
        return;
    node.visited = true;
    for (const neighbor of node.neighbors) {
        dfs(neighbor);
    }
    return 1;
};
const solution = (inputs) => {
    const [n, m] = inputs[0].split(" ").map((e) => +e);
    let result = 0;
    const nodes = [];
    for (let i = 0; i < n; i++) {
        nodes.push(new GraphNode(i + 1));
    }
    for (let i = 0; i < m; i++) {
        const [x, y] = inputs[i + 1].split(" ").map((e) => +e);
        nodes[x - 1].addNeighbor(nodes[y - 1]);
        nodes[y - 1].addNeighbor(nodes[x - 1]);
    }
    for (const node of nodes) {
        if (!node.visited) {
            result += dfs(node) ? 1 : 0;
        }
    }
    console.log(result);
};
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    inputs.push(line);
    lines++;
    if (lines >= +inputs[0].split(" ")[1] + 1) {
        rl.close();
    }
}).on("close", () => {
    solution(inputs);
    process.exit();
});
