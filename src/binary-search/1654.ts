// https://www.acmicpc.net/problem/1654

import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputs: string[] = [];

const solution = (inputs: string[]) => {
  const [K, N] = inputs[0].split(" ").map(Number);
  const lines: number[] = inputs.slice(1).map(Number);

  const result = binarySearch(lines, N);

  console.log(result);
};

const binarySearch = (lines: number[], target: number): number => {
  let left = 0;
  let right = Math.max(...lines);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    const linesNum = getLinesNum(lines, mid);
    // mid로 렌선을 잘랐을 경우 랜선의 갯수가 목표값 보다 크면, mid의 값을 늘려야 한다.
    if (linesNum >= target) {
      left = mid + 1;
    } else if (linesNum < target) {
      right = mid - 1;
    }
  }

  return right;
};

const getLinesNum = (lines: number[], target: number) => {
  const linesNum = lines.reduce((acc, cur) => {
    acc += Math.floor(cur / target);
    return acc;
  }, 0);
  return linesNum;
};

rl.on("line", (line) => {
  inputs.push(line);
  let [K, N] = inputs[0].split(" ").map(Number);

  if (inputs.length === K + 1) {
    rl.close();
  }
});

rl.on("close", () => {
  solution(inputs);
  process.exit();
});
