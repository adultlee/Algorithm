function solution(expression) {
  let arr = [];
  let cal = ["+", "-", "*"];
  let temp = "";
  var answer = 0;
  for (let i = 0; i < expression.length; i++) {
    if (i === expression.length - 1) {
      temp += expression[i];
      arr.push(temp);
    }
    if (cal.includes(expression[i])) {
      arr.push(temp);
      temp = "";
      arr.push(expression[i]);
    } else {
      temp += expression[i];
    }
  }
  //  * + - 순을 만들어보자

  function multiply(arr1) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === "*") {
        arr1.splice(i - 1, 3, arr1[i - 1] * arr1[i + 1]);
        i = i - 1;
      }
    }
  }
  function plus(arr1) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === "+") {
        arr1.splice(i - 1, 3, Number(arr1[i - 1]) + Number(arr1[i + 1]));
        i = i - 1;
      }
    }
  }
  function sub(arr1) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === "-") {
        arr1.splice(i - 1, 3, Number(arr1[i - 1]) - Number(arr1[i + 1]));
        i = i - 1;
      }
    }
  }
  // * + -
  let arr1 = [...arr];
  multiply(arr1);
  plus(arr1);
  sub(arr1);
  if (arr1[0] < 0) {
    arr1[0] = -1 * arr1[0];
  }
  if (arr1[0] > answer) {
    answer = arr1[0];
  }
  // * - +
  arr1 = [...arr];
  multiply(arr1);
  sub(arr1);
  plus(arr1);
  if (arr1[0] < 0) {
    arr1[0] = -1 * arr1[0];
  }
  if (arr1[0] > answer) {
    answer = arr1[0];
  }
  // - * +
  arr1 = [...arr];
  sub(arr1);
  multiply(arr1);
  plus(arr1);
  if (arr1[0] < 0) {
    arr1[0] = -1 * arr1[0];
  }
  if (arr1[0] > answer) {
    answer = arr1[0];
  }
  // - + *
  arr1 = [...arr];
  sub(arr1);
  plus(arr1);
  multiply(arr1);
  if (arr1[0] < 0) {
    arr1[0] = -1 * arr1[0];
  }
  if (arr1[0] > answer) {
    answer = arr1[0];
  }
  // + -  *
  arr1 = [...arr];
  plus(arr1);
  sub(arr1);
  multiply(arr1);
  if (arr1[0] < 0) {
    arr1[0] = -1 * arr1[0];
  }
  if (arr1[0] > answer) {
    answer = arr1[0];
  }
  // +   * -
  arr1 = [...arr];
  plus(arr1);

  multiply(arr1);
  sub(arr1);

  if (arr1[0] < 0) {
    arr1[0] = -1 * arr1[0];
  }
  if (arr1[0] > answer) {
    answer = arr1[0];
  }
  console.log(answer);

  return answer;
}
// 이 정도 노가다는 괜찮은 것인가... 하하...
