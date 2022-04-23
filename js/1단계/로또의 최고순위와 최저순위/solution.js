function solution(lottos, win_nums) {
  let zeroArr = lottos.filter((x) => {
    return x == 0;
  });
  let sameArr = win_nums.filter((x) => lottos.includes(x));
  let zeroArrCount = zeroArr.length;
  let sameArrCount = sameArr.length;
  let min, max;
  // 5개 맞으면 최대 1등, 최소 2등
  if (sameArrCount == 6) {
    max = 1;
    min = 1;
  } else {
    max = 7 - sameArrCount - zeroArrCount;
    if (sameArrCount == 0) {
      max = 6;
      min = 6;
    }
    min = 7 - sameArrCount;
    if (zeroArrCount == 6) {
      min = 6;
    }
  }

  let answer = [max, min];
  console.log(answer);
  return answer;
}

const lottos = [0, 0, 0, 0, 0, 0];
const win_nums = [38, 19, 20, 40, 15, 25];

solution(lottos, win_nums);
