/*  문제1. 100까지의 수 중에서 3의 배수이면서, 4의 배수인 수를 출력해라 
    문제2. 524의 약수의 개수를 구하시오.
    문제3. 100까지의 수중에서 9의 배수의 합계
*/
console.log(`===========1번 문제===========`);

var number = 100;
var i = 1;
while(i <= number) {
    if(i % 3 == 0 && i % 4 == 0) {
        console.log(`3의 배수이면서 4의 배수인 수 : ${i}`);
    }
    i++
}
console.log(`===========2번 문제===========`);

//1번 문제 clear.

var number = 524
var i = 1;
var result = 0; //개수를 누적할 변수
while(i <= number) {
    if(number % i === 0) {
        result++; //개수 세기. result += 1;도 무방하다.
    }
    i++;
}
console.log(`${result}개`);

console.log(`===========3번 문제===========`);

//2번 문제 clear

// 문제3. 100까지의 수중에서 9의 배수의 합계

var i = 1;
var number = 100;
var sum = 0;
while(i<=number) {
    if(i % 9 === 0) {
        sum += i;
    }    
    i++;
}
console.log(sum);
//3번 문제 clear
