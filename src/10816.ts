import readline from "readline";
let inputs: string[] = [];
let lines = 0;

const solution = (inputs: string[]) => {
  const map = new Map();
  const n = +inputs[0];
  const arrN = inputs[1].split(" ").map((e) => +e);
  const m = +inputs[2];
  const arrM = inputs[3].split(" ").map((e) => +e);
  let result = "";
  for (const num of arrN) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  for (const num of arrM) {
    result += `${(map.get(num) || 0).toString()} `;
  }
  console.log(result);
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line: string) => {
  inputs.push(line);
  lines++;
  if (lines >= 4) {
    rl.close();
  }
}).on("close", () => {
  solution(inputs);
  process.exit();
});
