// const bricks = [0, 2, 0, 1, 3, 1, 2, 0, 1, 0, 2, 0];
const bricks = [1, 2, 3, 4, 5, 6, 7];

function solution(bricks) {
  let answer = 0;
  const max = Math.max(...bricks);
  for (let i = 1; i < max + 1; i++) {
    let left = 0;
    let right = 0;
    for (let j = 0; j < bricks.length; j++) {
      if (bricks[j] >= i) {
        left = j;
        break;
      }
    }

    for (let j = bricks.length - 1; j >= 0; j--) {
      if (bricks[j] >= i) {
        right = j;
        break;
      }
    }

    if (left !== right) {
      for (let j = left; j < right; j++) {
        if (bricks[j] < i) {
          console.log(bricks[j], i);
          answer += 1;
        }
      }
    }
  }

  return answer;
}

solution(bricks);
