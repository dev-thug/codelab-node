"use strict";
// Haayyy, @hyeonjini @JaeyeonG1 bros😃, Can I solve this problem using recursive dfs?
// I tried to solve with dfs, but I didn't solve.
// Can you like feed me some solution with recursive function?
// from @dev-thug.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Baekjoon Online Judge 2667
 * https://www.acmicpc.net/problem/2667
 *
 * @file 2667.ts
 */
const readline_1 = __importDefault(require("readline"));
let inputs = [];
let lines = 0;
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];
class House {
    constructor(x, y) {
        this.getLocations = () => {
            return [this.x, this.y];
        };
        this.x = x;
        this.y = y;
    }
}
const dfs = (graph) => {
    const result = [];
    const length = graph.length;
    let numComplex = 0;
    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (graph[i][j] === 1) {
                let count = 0;
                const stack = [];
                const start = new House(i, j);
                stack.push(start);
                while (stack.length > 0) {
                    const house = stack.pop();
                    if (graph[house.x][house.y] === 0) {
                        continue;
                    }
                    const [x, y] = house.getLocations();
                    graph[x][y] = 0;
                    count += 1;
                    for (let i = 0; i < 4; i++) {
                        const nx = x + dx[i];
                        const ny = y + dy[i];
                        if (nx < 0 || ny < 0 || nx >= length || ny >= length) {
                            continue;
                        }
                        if (graph[nx][ny] === 1) {
                            stack.push(new House(nx, ny));
                        }
                    }
                }
                numComplex += 1;
                result.push(count);
            }
        }
    }
    return result.sort((a, b) => a - b);
};
const solution = (inputs) => {
    const n = +inputs[0];
    const graph = inputs.slice(1, inputs.length).map((e) => {
        const temp = [];
        for (const i of e) {
            temp.push(+i);
        }
        return temp;
    });
    const result = dfs(graph);
    console.log(result.length);
    result.forEach((e) => console.log(e));
};
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    inputs.push(line);
    lines++;
    if (lines >= +inputs[0] + 1) {
        rl.close();
    }
}).on("close", () => {
    solution(inputs);
    process.exit();
});
