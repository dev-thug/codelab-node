"use strict";
/**
 * Baekjoon Online Judge 1920
 * https://www.acmicpc.net/problem/1920
 *
 * @file 1920.ts
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
let input = [];
let lines = 0;
// LogN
const binarySearch = (arr, target) => {
    let result = 0;
    const arrayLength = arr.length;
    let left = 0;
    let right = arrayLength - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            result = 1;
            return result;
        }
        else if (arr[mid] > target) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    return result;
};
const solution = (inputs) => {
    const n = inputs[1].split(" ").map(Number);
    const sortedArr = n.sort((a, b) => a - b); // nlogn
    const m = inputs[3].split(" ").map(Number);
    const result = m.map((e) => binarySearch(sortedArr, e));
    console.log(result.join("\n"));
};
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.on("line", (line) => {
    input.push(line);
    lines++;
    if (lines >= 4) {
        rl.close();
    }
}).on("close", () => {
    solution(input);
    process.exit();
});
