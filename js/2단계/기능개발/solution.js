function solution(progresses, speeds) {
  let term = [];

  var answer = [];
  for (let i = 0; i < progresses.length; i++) {
    if ((100 - progresses[i]) % speeds[i] === 0) {
      term.push((100 - progresses[i]) / speeds[i]);
    } else {
      term.push(Math.floor((100 - progresses[1]) / speeds[1]) + 1);
    }
  }

  let count = 1;
  for (let i = 0; i < term.length - 1; i++) {
    for (let j = i + 1; j < term.length; j++) {
      console.log(term[i] + " " + term[j]);
      console.log(count);

      if (term[i] < term[j] && j < term.length) {
        answer.push(count);
        if (count > 2) i += count - 1;
        count = 1;

        break;
      } else {
        count++;
      }
      console.log(term[i]);
      if (j === term.length - 1) {
        answer.push(count);
        break;
      }
    }
  }

  return answer;
}
