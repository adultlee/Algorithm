function solution(s) {
  let finalAnswer = s.length;
  let finalString = s;
  for (let i = 1; i < s.length / 2 + 1; i++) {
    // i는 잘리는 문자열의 길이다.
    let answer = s;
    let hihi = s;
    for (let j = 0; j < answer.length; j += i) {
      // j는 확인하는 문자열의 길이이다.
      let count = 1;
      let thisString = answer.substring(j, j + i);
      let currentString = thisString;
      let tempString = currentString;
      let nextStartIdx = Number(j + i);
      let nextEndIdx = Number(j + i + i);
      let nextString = answer.substring(nextStartIdx, nextEndIdx);
      console.log(j + " : " + currentString);
      console.log(j + " : " + nextString);
      while (currentString === nextString) {
        if (Number(nextEndIdx) > Number(answer.length)) {
          break;
        }
        console.log(currentString);
        console.log(nextString);
        count++;
        nextStartIdx += i;
        nextEndIdx += i;
        tempString += nextString;
        currentString = nextString;
        nextString = answer.substring(nextStartIdx, nextEndIdx);
      }
      if (count > 1) {
        hihi = hihi.split(tempString).join(String(count) + thisString);
        console.log(hihi);
      }
    }
    if (hihi.length < finalAnswer) {
      finalAnswer = hihi.length;
      finalString = hihi;
    }
  }
  console.log(finalString);
  console.log(finalAnswer);

  return finalAnswer;
}

let s = "aaabarcarcarc";

solution(s);
// 문자열을 2중 포문을 통해 2로 나뉠때 , 절반 길이로 나뉠때까지 for문을 늘려준다.
// 바뀌는 경우 바꿔서 넣어준다.
// 어떤 문자열 혹은 문자를 기준으로 배열을 나누는 함수는 split이다. 삭제할때 사용하는 것은 splice이다.
// s = s.slice("") 가 기본형이다
//터트립니다... 다시 풀겠어요. 제한조건을 잘 읽자... 문제 이해도 안하고 풀면 이런 대참사가 일어난다,..
