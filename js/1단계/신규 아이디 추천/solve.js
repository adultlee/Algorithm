function solution(new_id) {

    //1단계 모두 소문자로 치환
    const arr1 = new_id.toLowerCase();
    console.log(arr1);

    //=======================================
    //2단계 이상한 리터럴 제거
    const tempCaseArr = "abcdefghijklmnopqrstuvwxyz-_.";
    const arr2 = arr1.filter(x => tempCaseArr.includes(x));
    console.log(arr2);


    //=======================================
    //2단계 이상한 리터럴 제거





    var answer = '';
    return answer;
}

var new_id = "...!@BaT#*..y.abcdefghijklm"

solution(new_id);

