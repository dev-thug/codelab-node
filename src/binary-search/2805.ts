/**
 * Baekjoon Online Judge 2805
 * https://www.acmicpc.net/problem/2805
 *
 * @file 2805.ts
 */
import readline from "readline";
let inputs: string[] = [];
let lines = 0;

const binarySearch = (trees: number[], target: number) => {};

const solution = (inputs: string[]) => {
  console.log(inputs);
  const [n, m] = inputs[0].split(" ").map(Number);
  const trees = inputs[1].split(" ").map(Number);

  const result = binarySearch(trees, m);

  console.log(result);
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line: string) => {
  inputs.push(line);
  lines++;
  if (lines >= 2) {
    rl.close();
  }
}).on("close", () => {
  solution(inputs);
  process.exit();
});
