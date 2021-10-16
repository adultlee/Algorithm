function solution(lottos, win_nums) {

    var zero_arr = [0 , 0 , 0 , 0 , 0 , 0];
    var zero_count_arr = lottos.filter(x => zero_arr.includes(x));
    const zero_count = zero_count_arr.length;
    var filtered_arr = lottos.filter((x) => win_nums.includes(x));
    const filtered_count = filtered_arr.length;
    var min;
    if(filtered_count >= 2){
     min = 7 - filtered_count;
    }
    else
    {
        min = 6;
    }
    var max = 7 - filtered_count - zero_count; // 이 경우 filtered_count가 0이 되면서 zero_count도 0인 경우 max 가 7이 되며 문제가 발생한다.

   
    var answer = [max, min];
    console.log(min)
    console.log(zero_count);
    console.log(answer)
    return answer;
}
const lottos = [0 ,3 ,2 ,1,0  ,0];
const win_nums = [1 , 2 , 4, 5,3,6];

solution(lottos , win_nums);

