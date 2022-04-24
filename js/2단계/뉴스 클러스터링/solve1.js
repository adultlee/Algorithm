function solution(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  let arr1 = [];
  let arr2 = [];

  for (let i = 0; i < str1.length; i++) {
    if (
      "a" <= str1[i] &&
      str1[i] <= "z" &&
      "a" <= str1[i + 1] &&
      str1[i + 1] <= "z"
    )
      arr1.push(str1[i] + str1[i + 1]);
  }
  for (let i = 0; i < str2.length; i++) {
    if (
      "a" <= str2[i] &&
      str2[i] <= "z" &&
      "a" <= str2[i + 1] &&
      str2[i + 1] <= "z"
    )
      arr2.push(str2[i] + str2[i + 1]);
  }

  console.log(arr1);
  console.log(arr2);

  //교집합 , 합집합 구하기
  let inner = []; // 교집합
  let sum = [...arr1, ...arr2]; // 합집합
  let temp = [...arr2];
  inner = arr1.filter((x) => {
    if (temp.includes(x)) {
      temp.splice(temp.indexOf(x), 1);
      return true;
    } else {
      return false;
    }
  });
  for (let i = 0; i < inner.length; i++) {
    if (sum.includes(inner[i])) {
      sum.splice(sum.indexOf(inner[i]), 1);
    }
  }
  console.log(sum);
  console.log(inner);

  var answer = 0;
  if (sum.length == 0) return 65536;
  if (inner.length == 0) return 0;

  return Math.floor((inner.length / sum.length) * 65536);
}
// 두 문자열을 받아서 대문자로 바꾸어 준다.
// 두 글자씩 입력 받을때 예외처리를 하여 영어만 받을 수 있도록 한다.
// 교집합을 구한다.
//새로 풀어봤습니다.
