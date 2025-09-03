/* 화살표 함수 (Arrow Function) */
//익명함수가 => 화살표 함수로 변경

let add = function(a,b) {
    return a + b;
}
console.log(`이것을 화살표 함수로 변경해보면?`);

// add2(1,2); //이것도 익명함수기 때문에, 호이스팅은 불가능하다.
let add2 = (a,b) => {
    return a+b;
}

console.log(add2(1,2));

//규칙 1 - 코드가 한줄이면 {}를 생략하고 return을 생략할 수 있다. (자동리턴)
let add3 = (a,b) => a + b; //매개변수 a,b를 받고 a+b를 자동리턴 해주는 한줄짜리 코드.
let some = () => console.log(`Hello some!`); //매개변수 없이 콘솔로그 찍는 한줄짜리 코드.
let x = (a) => a % 2 === 0 ? "짝수" : `홀수`; //매개변수 a를 받고 a가 짝수인지 홀수인지 판별하는 한줄짜리 코드.

//규칙 2 - 매개변수가 하나일 때 () 생략 가능하다.
let y = a => a % 2 === 0  ? "짝수" : "홀수"; //매개변수가 '1개'라서 소괄호 생략 가능. (생략을 하지 않아도 됨)

console.log(y(2));


//규칙 3 - 겍체는 {}로 표현되는데, 만약 객체를 반환해야 된다면 ()로 묶어줌.
let person = () => ({name : "홍길동"}); //이곳을 중괄호로 묶어준다.
console.log(person());

console.log(`=============================`);
//선언적 함수
function myName(name, age) {
    return `${name}님의 나이는 ${age}살 입니다.`;
}

//익명 함수
let myNames = function(name, age) {
    return `${name}남의 나이는 ${age}살 입니다.`;
}

//화살표 함수
let yourName = (name,age) => `${name}님의 나이는 ${age}살 입니다.`;

console.log(myName("홍길동",20));
console.log(myNames("이순신",20));
console.log(yourName("유관순",20));