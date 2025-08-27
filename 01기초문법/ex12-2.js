/* 반복문 안에서 조건식
    x까지의 수 중에서 짝수들의 합계
*/

/* 
let i = 1;
let sum = 0;

while(i <= 100) {
    if(i % 2 === 0) {
        sum += i;
    }
    i++;
}
console.log(`1~100까지의 수 중 짝수의 합 : ${sum}`); */
// case 1

let i = 2;
let sum = 0;
while (i <= 100) {
    console.log(i);
    sum += i;
    i += 2;
}
console.log(`1~100까지의 수 중 짝수의 합 : ${sum}`);
//case 2