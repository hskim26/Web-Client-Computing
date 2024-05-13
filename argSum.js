function solution(numbers){
    let answer = 0;
    let check = [0,0,0,0,0,0,0,0,0,0];

    for(let i in numbers){
        check[numbers[i]] = 1;
    }
    for(let i in check){
        if(check[i] == 0)
            answer += Number(i);
    }
    return answer;
}

console.log(solution([1,2,3,4,6,7,8,0]));
console.log(solution([5,8,4,0,6,7,9]));
console.log(solution([2,4,6]));
