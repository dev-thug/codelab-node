// https://www.acmicpc.net/problem/10815

import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputs: string[] = [];

const solution = (inputs: string[]) => {
  const N = Number(inputs[0]);
  const cards = inputs[1].split(" ").map(Number);
  const M = Number(inputs[2]);
  const myCards = inputs[3].split(" ").map(Number);

  const set = new Set(cards);
  let result = "";
  for (const card of cards) {
    set.add(card);
  }

  for (const myCard of myCards) {
    if (set.has(myCard)) {
      result += "1 ";
    } else {
      result += "0 ";
    }
  }
  console.log(result);
};

rl.on("line", (line) => {
  inputs.push(line);

  if (inputs.length === 4) {
    rl.close();
  }
});

rl.on("close", () => {
  solution(inputs);
  process.exit();
});
