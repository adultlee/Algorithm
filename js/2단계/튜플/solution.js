function solution(s) {
  var answer = [];
  let arr = s.split("},{");

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split("{").join("").split("}").join("").split(",");
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 1) {
      let key = arr[i];
      answer.push(Number(arr[i])); // 하나만 있는,arr[i] 정답에 arr[i]을 넣는다
      arr.splice(i, 1); //arr[i]를 넣었으므로 전체 배열에서 없에준다.
      // 이제 arr의 나머지 원소들중 arr[i]과 같은 값을 없에준다.
      if (arr.length === 0) {
        break;
      } else {
        for (let j = 0; j < arr.length; j++) {
          if (arr[j].includes(key[0])) {
            arr[j].splice(arr[j].indexOf(key[0]), 1);
          }
        }
      }
      i = -1;
    }
  }

  return answer;
}
