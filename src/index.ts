import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputs: string[] = [];

const solution = (inputs: string[]) => {};

rl.on("line", (line) => {
  inputs.push(line);

  if (inputs.length === 1) {
    rl.close();
  }
});

rl.on("close", () => {
  solution(inputs);
  process.exit();
});
