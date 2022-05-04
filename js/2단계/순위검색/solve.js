function solution(info, query) {
  var answer = [];
  for (let i = 0; i < query.length; i++) {
    let queryArr = query[i].split(" and ").join(" ").split(" ");
    let count = 0;
    for (let j = 0; j < info.length; j++) {
      let infoArr = info[j].split(" ");
      let test = true; // info의 j번째 항목의 모든 값이 queryArr[i]번째 값과 같은지 확인
      for (let k = 0; k < 4; k++) {
        if (infoArr[k] !== queryArr[k] && "-" !== queryArr[k]) {
          test = false;
        }
      }
      if (Number(infoArr[4]) < Number(queryArr[4])) {
        test = false;
      }
      if (test) {
        count += 1;
      }
    }
    answer.push(count);
  }

  return answer;
}

// query의 첫 원소를 통해서 info를 모두 조회후 하나라도 틀리면 벤
// 효율성 테스트에서 걸렸습니다...
