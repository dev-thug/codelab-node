/**
 * Baekjoon Online Judge 1920
 * https://www.acmicpc.net/problem/1920
 *
 * @file 1920.ts
 */

import readline from "readline";
let input: string[] = [];
let lines = 0;

// LogN
const binarySearch = (arr: number[], target: number): number => {
  let result = 0;
  const arrayLength = arr.length;

  let left = 0;
  let right = arrayLength - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      result = 1;
      return result;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;
};

const solution = (inputs: string[]) => {
  const n = inputs[1].split(" ").map(Number);

  const sortedArr = n.sort((a, b) => a - b); // nlogn

  const m = inputs[3].split(" ").map(Number);

  const result = m.map((e) => binarySearch(sortedArr, e));

  console.log(result.join("\n"));
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line: string) => {
  input.push(line);
  lines++;
  if (lines >= 4) {
    rl.close();
  }
}).on("close", () => {
  solution(input);
  process.exit();
});
