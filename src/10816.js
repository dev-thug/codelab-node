"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
let inputs = [];
let lines = 0;
const solution = (inputs) => {
    const map = new Map();
    const n = +inputs[0];
    const arrN = inputs[1].split(" ").map((e) => +e);
    const m = +inputs[2];
    const arrM = inputs[3].split(" ").map((e) => +e);
    let result = "";
    for (const num of arrN) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    for (const num of arrM) {
        result += `${(map.get(num) || 0).toString()} `;
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
    if (lines >= 4) {
        rl.close();
    }
}).on("close", () => {
    solution(inputs);
    process.exit();
});
