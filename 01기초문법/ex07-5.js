//삼항연산자 : 조건 ? 참 : 거짓 == if(식) {식}else{식}과 같다.

let age = 20;
let result = (age>=20) ? "성인입니다." : "미성년자입니다."
console.log("당신은",result);

//프로그램에는 랜덤한 값을 만드는 경우가 필요하다. Math.random() <- 0 이상 1미만 랜덤한 실수값을 만들어준다.

let random = Math.random();
console.log(random);

console.log(Math.random() * 10); //0부터 10미만의 랜덤한 실수값

console.log(parseInt(Math.random() * 10)); //0부터 10미만의 랜덤한 '정수'값

random = parseInt(Math.random() * 10);
let r = (random % 2 === 0) ? "짝수" : "홀수";
console.log("랜덤값",random,"은",r,"입니다.");


