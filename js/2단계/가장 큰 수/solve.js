function solution(numbers) {
  let temp = numbers.sort();
  console.log(temp);
  let str = "";

  for (let i = temp.length - 1; i >= 0; i--) {
    str += String(temp[i]);
  }
  console.log(str);
  var answer = String(str);
  return answer;
}

function solution1(numbers) {
  var answer = numbers.map((c) => String(c));
  var temp = answer
    .sort((a, b) => {
      console.log(a + " " + b);

      return b + a - (a + b);
    })
    .join("");
  console.log(temp);
  answer = String(temp);
  return answer[0] === "0" ? "0" : answer;
}

let numbers = [3, 30, 34, 5, 9];
solution1(numbers);
