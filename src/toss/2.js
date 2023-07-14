const { log } = require("console");

const logs = [
  [1274713200000, 1274716800000],
  [1274716800000, 1274720400000],
  [1274720400000, 1274724000000],
  [1274724000000, 1274727600000],
];

// const logs = [
//   [1683993600000, 1683994800000],
//   [1683995400000, 1683996000000],
//   [1683997200000, 1683999600000],
//   [1683999600000, 1684000200000],
//   [1684000800000, 1684003800000],
//   [1684003800000, 1684004220000],
// ];

function solution(logs) {
  const cycle = logs[0][1] - logs[0][0];
  const result = [];

  for (const [start, end] of logs) {
    const time = end - start;
    if (time > cycle) {
      result.push(time);
    }
  }

  if (result.length === 0) return [0, 0];

  let sum = result.reduce((acc, curr) => acc + curr, 0);

  const avg = sum / result.length;

  return [result.length, avg];
}

console.log(solution(logs));
