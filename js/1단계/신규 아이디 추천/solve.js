// function solution(new_id) {

//     //1단계 모두 소문자로 치환
//     const arr1 = new_id.toLowerCase();
//     console.log(arr1);

//     //=======================================
//     //2단계 이상한 리터럴 제거
//     const tempCaseArr = "abcdefghijklmnopqrstuvwxyz-_.";
//     const arr2 = arr1.filter(x => tempCaseArr.includes(x));
//     console.log(arr2);


//     //=======================================
//     //2단계 이상한 리터럴 제거





//     var answer = '';
//     return answer;
// }

// var new_id = "...!@BaT#*..y.abcdefghijklm"

// solution(new_id);

// ====================================== 실패한 풀이

function solution(new_id) {
    new_id = new_id
        .toLowerCase()
        .replace(/[^\w\.\-]/g, '')
        .replace(/[\.]{2,}/g, '.')
        .replace(/^\./, '')
        .replace(/\.$/, '');
    if (!new_id) {
        new_id = "a";
    }
    if (new_id.length >= 16) {
        new_id = new_id
            .slice(0, 15)
            .replace(/\.$/, '');
    }
    if (new_id.length <= 2) {
        new_id = new_id.padEnd(3, new_id[new_id.length - 1]);
    }
    return new_id;
}
