//랜덤한 점수를 하나 생성 1 ~ 100

let point = parseInt(Math.random() * 100 + 1);
let grade = "불합격";
/* if(point >= 60) {
    console.log("점수는",point);
    console.log("합격입니다!");
} else {
    console.log("점수는",point);
    console.log("불합격입니다!");   
} */
//아래께 더 효율적임. 코드 한줄을 줄임.

/* console.log("점수는",point);
if(point >= 60) {
    console.log("합격입니다!");
} else {
    console.log("불합격입니다!");   
} */

if(point >= 60) {
    grade = "합격"
} else {
    grade = "불합격"
}
console.log("점수 :",point);
console.log(grade);
console.log("============let 변수의 scope(범위)============");

if (true) {
    let name = "홍길동" //중괄호 스코프 - 중괄호 안에서 선언된 변수는 중괄호 안에서만 쓸 수 있다.
}
/* console.log(name);//중괄호 안에서 name이 선언됐기 때문에 사용불가. */


