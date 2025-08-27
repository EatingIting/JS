//전부 for문으로 작성한다.

//1. 구구단 5단을 for문 출력
console.log(`============= 1번 문제 =============`);
for(let i = 1; i<=9; i++) {
    console.log(`5 x ${i} = ${5*i}`);
    
}
//2. 7~100까지 정수중에서 7의 배수를 출력
console.log(`============= 2번 문제 =============`);
/* for(let i=7; i<=100; i++) {
    if(i % 7 === 0) {
        console.log(`7부터 100까지 정수중에서 7의 배수는 ${i} 입니다.`);
    }
} */

let multiples = [];
for(let i = 7; i<= 100; i++) {
    if(i % 7 === 0) {
        multiples.push(i);
    }
}
console.log(`7부터 100까지의 정수중에서 7의 배수는 ${multiples.join(', ')}입니다.`);


//3. 1~50까지 홀수의 합
console.log(`============= 3번 문제 =============`);
let sum = 0;
for(let i=1; i<=50; i++) {
    if(i % 2 !== 0) {
        sum += i;
    }
}
console.log(`1부터 50까지의 홀수의 합은 ${sum} 입니다.`);

//4. 100의 약수의 합
console.log(`============= 4번 문제 =============`);

let result = 0;
for(let i = 1; i<=100; i++) {
    if(100 % i === 0) {
        result += i;
    }
}
console.log(`100의 약수의 합은 ${result} 입니다.`);
