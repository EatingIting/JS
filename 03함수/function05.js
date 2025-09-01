//변수에 함수를 담아본다.
function some() {
    console.log("say hello!");
    
}
let x = some;
console.log(x); 
x(); //x를 함수처럼 사용이 가능해짐

//익명함수
// sayHello(); //익명함수는 호이스팅이 불가능함. 따라서 function구문 밑에서 호출 가능.
let sayHello = function() {
    console.log("say Hello!!");
    
}
sayHello();

//두 수의 덧셈을 반환하는 익명함수
let add = function(a, b) {
    return a + b;
}
console.log(add(1, 2));