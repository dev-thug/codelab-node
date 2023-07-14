const N = 5;
const sequence = [3, 5, 4, 1, 2];

function solution(N, sequence) {
  let answer = 0;
  const mid = Math.floor(N / 2);
  let current = 1;

  for (const e of sequence) {
    if (e === current) {
      continue;
    }

    const distance = Math.abs(e - current);

    if (distance > mid) {
      answer += N - distance;
    } else {
      answer += distance;
    }
    current = e;
  }

  return answer;
}

console.log(solution(N, sequence));
