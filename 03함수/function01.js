/* 함수를 만들어보자. */

//선언적 함수는 당겨호출하기(호이스팅)가 가능하다.
sayHello();

//함수의 선언
function sayHello() {
    console.log(`안녕하세요!`);
}

//구구단을 출력하는 함수
function gugudan() {
    console.log(`=== 2단 ===`);
    for(let i = 1; i<=9; i++){
        console.log(`2 * ${i} = ${2*i}`);
    }
}

//함수를 부르는 과정 - 호출
sayHello();
gugudan();