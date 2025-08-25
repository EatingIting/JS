/* 변수의 선언방법 

    var 변수로 지정할 이름;
*/

var a; //a라는 변수 생성(값이 아무것도 들어있지 않음)
console.log(a); //결과값 : undefined

a = 1;
console.log(a); //결과값 : 1

var b = 1; //선언과 초기화를 동시에 진행 가능;
console.log(a);

var b = "홍길동"
console.log(a); //a라는 똑같은 이름의 변수를 만들어서 실행을 하였더니, 사용이 가능하다. (인터프리터 언어의 특징) 
// 하지만 동일한 이름의 변수를 재생성 하는것은 바람직하지 않다.

a = 100; //변수의 값을 변경할 수 있다. (변수의 재활용)
console.log(a);

var result = a + 100; //변수의 값을 다른 변수에 저장하는것도 가능
console.log("result의 값 :",result);

//let 변수 - ES6에서 추가된 키워드
//동일한 변수 선언 불가 ex)

// let c = 10;
// let c = 20; /* ES5에서는 됐지만, ES6에서는 안된다. */

//const - ES6에서 추가된 키워드(상수(변하지 않는 값)를 나타내는 키워드)

const EARTH_RADIUS = 6400; //상수의 이름짓는 규칙은 모두가 대문자고 띄어쓰기가 필요한 부분에 언더바를 붙인다.
//그리고 반드시 변수 생성과 동시에 초기화가 진행돼야 한다.
// EARTH_RADIUS = 7000; //상수는 한번 선언되면, 변경될 수 없다.

console.log(EARTH_RADIUS);
