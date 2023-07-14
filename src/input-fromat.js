"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
let inputs = [];
let lines = 0;
const solution = (inputs) => { };
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    inputs.push(line);
    lines++;
    if (lines >= +inputs[1] + 2) {
        rl.close();
    }
}).on("close", () => {
    solution(inputs);
    process.exit();
});
