// https://www.acmicpc.net/problem/9012

import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputs: string[] = [];

const solution = (inputs: string[]) => {
  const ps = inputs.slice(1);
  for (const e of ps) {
    const stack: string[] = [];
    let result = "YES";
    for (const char of e) {
      if (char === "(") {
        stack.push(char);
      } else if (char === ")") {
        if (stack.length === 0) {
          result = "NO";
          break;
        }
        stack.pop();
      }
    }

    if (stack.length !== 0) {
      result = "NO";
    }
    console.log(result);
  }
};

rl.on("line", (line) => {
  inputs.push(line);

  if (inputs.length === Number(inputs[0]) + 1) {
    rl.close();
  }
});

rl.on("close", () => {
  solution(inputs);
  process.exit();
});
