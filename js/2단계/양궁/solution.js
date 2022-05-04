function solution(n, info) {
  var answer = [];
  var lionInfo = []; // 라이언의 성적을 모아둡니다. 결과에 들어가야 하기 때문에 마지막 return 에만 넣어줍니다.
  let lionScore = 0;
  let tempArr = []; //dfs 를 돌면서 임시로 저장될 배열입니다. 느낌에 매개변수로 넘겨야 하지 않을까...
  let subScore = 0; // 라이언의 점수입니다. max로 확인받아 저장받습니다. //가 아니라 차이가 가장커야함
  //   let tempScore = 0; // dfs 돌면서 임시로 저장될 점수 입니다. 매개변수로 넘겨 줍시다. 아니다 마지막에만 계산하면 되니까 그떄 해되 될듯

  function dfs(index, arrowCount, tempArr) {
    if (index === 11) {
      let tempA = 0; // 어피치의 점수
      let tempL = 0; // 라이언의 점수
      for (let i = 0; i < info.length; i++) {
        if (info[i] < tempArr[i]) {
          tempL += 10 - i;
          tempA += 0;
        } else {
          tempL += 0;
          if (info[i] === 0) tempA += 0;
          else {
            tempA += 10 - i;
          }
        }
      }
      //console.log(tempArr+ " " + tempA + " " + tempL+ " " +subScore  );
      if (tempL > tempA) {
        if (subScore <= tempL - tempA) {
          subScore = tempL - tempA;
          answer = [...tempArr]; // 꼭 얕은복사...
        }
      }
      return;
    }
    let sum = 0;
    for (let i = 0; i < index; i++) {
      sum += tempArr[i];
    }
    if (sum < n) {
      tempArr[index] = arrowCount;
      sum += tempArr[index];
      if (sum > n) {
        tempArr[index] = 0;
      }
    } else {
      tempArr[index] = 0;
    }
    if (index === 10) {
      let sum1 = 0;
      for (let i = 0; i < 11; i++) {
        sum1 += tempArr[i];
      }
      if (sum1 < n) {
        tempArr[10] = n - sum1;
      }
    }

    dfs(index + 1, info[index + 1] + 1, tempArr);
    dfs(index + 1, 0, tempArr);
  }
  dfs(0, 0, tempArr);
  dfs(0, info[0] + 1, tempArr);

  return answer.length === 0 ? [-1] : answer;
}

// 어피치가 n발을 다 쏜 후 라이언의 점수를 확인해야 하는것,
// dfs 내부에서 구현해야 하는것
// 1. 매 실행에서 분기를 나눕니다.
// 1-1 분기마다 더한 화살의 횟수의 총합이 n을 넘지 않도록 합니다. (종료조건)
// 종료시 특정 배열에 모아둔 값들을 return 시켜줘야 합니다.
