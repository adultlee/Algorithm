function solution(s) {
    var answer = 0;
    s = s.replace("zero", "0");
    s = s.replace("one", "1");
    s = s.replace("two", "2");
    s = s.replace("three", "3");
    s = s.replace("four", "4");
    s = s.replace("five", "5");
    s = s.replace("six", "6");
    s = s.replace("seven", "7");
    s = s.replace("eight", "8");
    answer = s.replace("nine", "9");

    answer = Number(answer)
    return answer;
}
var answer =0;
var s = "one4seveneight"
solution(s);
console.log(solution(s)
);