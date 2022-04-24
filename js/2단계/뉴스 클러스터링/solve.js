function solution(str1, str2) {
  let str_arr1 = [];
  let str_arr2 = [];
  let temp2 = [];
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  let testArr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  for (let i = 0; i < str1.length - 1; i++) {
    if (testArr.includes(str1[i]) && testArr.includes(str1[i + 1]))
      str_arr1.push(str1[i] + str1[i + 1]);
  }
  for (let i = 0; i < str2.length - 1; i++) {
    if (testArr.includes(str2[i]) && testArr.includes(str2[i + 1])) {
      str_arr2.push(str2[i] + str2[i + 1]);
      temp2.push(str2[i] + str2[i + 1]);
    }
  }
  //   console.log(str_arr1);
  //   console.log(str_arr2);

  let test = [...str_arr2];
  let arr1 = str_arr1.filter((x) => {
    if (test.includes(x)) {
      test.splice(test.indexOf(x), 1);
      return true;
    } else {
      return false;
    }
  });
  let temp = arr1;
  let arr2 = [...str_arr1, ...str_arr2];

  for (let i = 0; i < temp.length; i++) {
    if (arr2.includes(temp[i])) {
      arr2.splice(arr2.indexOf(temp[i]), 1);
    }
  }
  //   console.log(arr1);
  //   console.log(arr2);
  if (arr2.length === 0) {
    return 65536;
  }
  if (arr1.length === 0) {
    return 0;
  }
  console.log(Math.floor((arr1.length / arr2.length) * 65536));
  return String(Math.floor((arr1.length / arr2.length) * 65536));
}

var str1 = "aaaab";
var str2 = "aaab";

solution(str1, str2);

// 문자열 2개를 2음절씩 끊어서 배열 형태로 만든다 () 이때 특수문자가 포함되면 배열에 추가하지 않는다
// 문자열 2개의 음절씩 끊어서 만든 배열을 비교하여 서로 합집합과 교집합을 만든다.
// 현재 모르는 것 (소문자로 통일하는것) , (부동소수점 아래로 없에기) , 배열합치기
// string = string.toUpperCase(); toLowerCase(); Math 함수 사용해도 되나...?
// 같은값이 있는건 어쩌지 없에줘야 하는듯
//var str1 = "aaaa";
//var str2 = "aaa"; 여기서 틀렸었음
//let arr1 = str_arr1.filter((x) => test.includes(x));
// 위와 같은 방법으론 str_arr1이 더 큰 경우에는 계산하지 못할 수 도 있음
