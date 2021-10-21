## 문제 풀이

제한사항 <br>
1 ≤ s의 길이 ≤ 50<br>
s가 "zero" 또는 "0"으로 시작하는 경우는 주어지지 않습니다.<br>
return 값이 1 이상 2,000,000,000 이하의 정수가 되는 올바른 입력만 s로 주어집니다.<br>

## ex)
1478 → "one4seveneight"
234567 → "23four5six7"
10203 → "1zerotwozero3"

``` js
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
```
중간에 작성한 코드이다. 입력받은 string 값들을 받아서 number 값으로 바꾸어준다.
그리고 js는 특별한 타입형을 제시하지 않기 때문에 이경우 Number을 통해 형변환을 시켜줘야만 한다.

그래도 해결되지 않았으나 알고보니 replace 함수는 해당 문자열의 가장 앞 부분만을 바꾸어 준다는 것을 알게 되었다. 
따라서 다른 방법을 모색해야만 했다.

따라서 정규표현식을 사용하여

``` js
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
```
으로 바꾸어 해결해 주었다. / ~ /g 는 전역으로 사용되는 문자열을 지칭한다.





