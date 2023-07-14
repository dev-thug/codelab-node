"use strict";
/**
 * Baekjoon Online Judge 2606
 * https://www.acmicpc.net/problem/2606
 *
 * @file 2606.js
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
let numComputer;
let numNetwork;
let network;
let input = [];
let lines = 0;
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
class GraphNode {
    constructor(value) {
        this.neighbors = [];
        this.visited = false;
        this.value = value;
    }
    addNeighbor(neighbor) {
        this.neighbors.push(neighbor);
    }
}
const bfs = (startGraphNode) => {
    const queue = [];
    startGraphNode.visited = true;
    queue.push(startGraphNode);
    let result = 0;
    while (queue.length > 0) {
        // shift() - Removes the first element from an array and returns it.
        const currentGraphNode = queue.shift();
        for (const neighbor of currentGraphNode.neighbors) {
            if (!neighbor.visited) {
                neighbor.visited = true;
                queue.push(neighbor);
                result += 1;
            }
        }
    }
    return result;
};
const solution = (input) => {
    numComputer = +input[0];
    numNetwork = +input[1];
    network = [
        ...input.slice(2, input.length).map((e) => {
            const parts = e.split(" ");
            return [+parts[0], +parts[1]];
        }),
    ];
    const GraphNodes = [];
    for (let i = 0; i < numComputer; i++) {
        GraphNodes.push(new GraphNode(i + 1));
    }
    for (const [a, b] of network) {
        GraphNodes[a - 1].addNeighbor(GraphNodes[b - 1]);
        GraphNodes[b - 1].addNeighbor(GraphNodes[a - 1]);
    }
    console.log(bfs(GraphNodes[0]));
};
rl.on("line", (line) => {
    input.push(line);
    lines++;
    if (lines >= +input[1] + 2) {
        rl.close();
    }
}).on("close", () => {
    solution(input);
    process.exit();
});
