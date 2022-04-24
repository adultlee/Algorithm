function solution(lottos, win_nums) {
  let zeroArr = lottos.filter((x) => {
    return x == 0;
  }); // filter를 통해서 lottos의 원소들을 특정한 기준에 따라서 return 해줍니다. 다소 코드가 가독성이 떨어질 수 있으나 더 좋은 방법 또한 존재
  let sameArr = win_nums.filter((x) => lottos.includes(x)); // 마찬가지로 lottos.includes는 x의 각 원소에 대해서 boolean값을 return 해주는 점을 이용합니다
  let zeroArrCount = zeroArr.length;
  let sameArrCount = sameArr.length;
  let min, max;
  // 5개 맞으면 최대 1등, 최소 2등
  if (sameArrCount >= 1) {
    min = 7 - sameArrCount;
    max = 7 - sameArrCount - zeroArrCount;
  } else {
    min = 6;
    max = 7 - zeroArrCount;
  }
  if (min == 7) {
    min = 6;
  }
  if (max == 7) {
    max = 6;
  }
  let answer = [max, min];

  return answer;
}

const lottos = [0, 0, 0, 0, 0, 0];
const win_nums = [38, 19, 20, 40, 15, 25];

solution(lottos, win_nums);
