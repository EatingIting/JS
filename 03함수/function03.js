/* 함수의 실행한 결과를 호출구문으로 돌려주는 값 - return */

function add(a,b) {
    return a + b;
}

let result = add(3,5); //return을 받아서 저장하는 코드
console.log(`함수 실행결과 : ${result}`); //함수 실행결과

//리턴이 있는 함수는 호출문이 실행결과를 돌려받기 때문에, 출력문에 한번에 쓸 수 있다.
console.log(`함수 실행결과 : ${add(5, 5)}`);

//return이 있는 함수는 함수의 중첩이 가능하다.
console.log(`함수 실행결과 : ${add(add(1,2),add (3,5))}`); //3과 8을 add함수로 호출시킨다.

//return -> 돌려주다 + 함수의 종료

//반드시 양의정수값만 전달되어야 하는 함수라면
function some(num) {
    if(num <= 0) {
        // return; //return 키워드는 단독으로 사용이 가능하며, 이렇게 사용하면 종료의 의미이다.
        return false; //return;만 단독 사용하면 undefined가 반환되기 때문에, boolean 값을 반환하도록 하는게 일반적이다. return false;
    }
    return "전달받은 양의 정수는 "+ num + " 입니다.";
    console.log(`이거 실행되나?`); //return 키워드 다음에 나오는 구문은 동작하지 않는다.
}

console.log(some(-10));
