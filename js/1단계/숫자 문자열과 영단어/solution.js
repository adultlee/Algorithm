function solution(s) {
    var answer = 0;
    s = s.replace(/zero/g, '0');
    s = s.replace(/one/g, '1');
    s = s.replace(/two/g, '2');
    s = s.replace(/three/g, '3');
    s = s.replace(/four/g, '4');
    s = s.replace(/five/g, '5');
    s = s.replace(/six/g, '6');
    s = s.replace(/seven/g, '7');
    s = s.replace(/eight/g, '8');
    answer = s.replace(/nine/g, '9');

    answer = Number(answer)
    return answer;
}

var answer =0;
var s = "one4seveneight"
solution(s);
console.log(solution(s)
);