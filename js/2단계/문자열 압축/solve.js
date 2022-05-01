function solution(s) {
  let answer = 9999;
  for (let i = 2; i < s.length; i++) {
    // 길이가 몇을 줄일건지 aa 는 2a 일때 i =2다
    let arr = [...s].join("");

    for (let j = 0; j < arr.length; j++) {
      let isSame = false;
      for (let k = 0; k < i; k++) {
        if (arr[j + k] === arr[j + k + i]) { // 이렇게 하면 서로다른 문자열 두개만 구분이가능하다. 3개 이상인 경우 확인 불가
          isSame = true;
        } else {
          isSame = false;
          break;
        }
        if (j + k > arr.length) {
          isSame = false;
        }
      }
      if (isSame) {
        let tempStr = "";
        for (let l = 0; l < 2 * i; l++) {
          tempStr += arr[j + l];
        }
        let answerStr = "";
        for (let l = 0; l < i; l++) {
          answerStr += arr[j + l];
        }
        console.log(tempStr);
        arr = arr.split(tempStr).join(String(i + answerStr));
        console.log(arr);
        j++;
      }
    }
    if (answer > arr.length) {
      answer = arr.length;
    }
  }
  console.log(answer);
  return answer;
}
let s = "abcabc";

solution(s);

// 문자열을 2중 포문을 통해 2로 나뉠때 , 절반 길이로 나뉠때까지 for문을 늘려준다.
// 바뀌는 경우 바꿔서 넣어준다.
// 어떤 문자열 혹은 문자를 기준으로 배열을 나누는 함수는 split이다. 삭제할때 사용하는 것은 splice이다.
// s = s.slice("") 가 기본형이다
