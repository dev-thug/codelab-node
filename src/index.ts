import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputs = [];

rl.on("line", (line) => {
  inputs.push(line);

  if (inputs.length === 1) {
    rl.close();
  }
});

rl.on("close", () => {
  process.exit();
});
