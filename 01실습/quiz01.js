//어떤수에서 - 랜덤한 값을 빼주면 음수값이 나올 수 있다.
//-5 ~ 5사이의 랜덤한 값을 출력해준다.
//이 값이 언제든 절대값으로 나오도록 삼항연산식을 세워보자.

/* let number = 5;
let result = number - (Math.random() * 11);
console.log(result);


result < 0 ? -result : result;

console.log(parseInt(result));
 */

//1. 1~10까지 랜덤한 수를 생성한다.
//2. 이 숫자가 3의 배수라면 "3의 배수입니다.", 3의 배수가 아니라면 "3의 배수가 아닙니다."를 출력

/* let number = parseInt(Math.random() * 11);
number = number <= 1 ? number+1 : number;
 */
let number = parseInt(Math.random() * 10) + 1;
console.log(number);


let result = number % 3 === 0 ? "3의 배수입니다." : "3의 배수가 아닙니다."
console.log(result);
