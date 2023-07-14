import readline from "readline";
let inputs: string[] = [];
let lines = 0;

const solution = (inputs: string[]) => {};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line: string) => {
  inputs.push(line);
  lines++;
  if (lines >= +inputs[1] + 2) {
    rl.close();
  }
}).on("close", () => {
  solution(inputs);
  process.exit();
});
