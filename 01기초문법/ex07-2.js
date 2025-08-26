//비교연산자

var a = 5;
var b = 3;

console.log(a == b);
console.log(a != b);
console.log(a >= 5);
console.log(a < 10);
console.log(a <= 3);
console.log(a > 5);

//JS에만 있는 연산자 ===, !==

let x = "5";
let y = 5;

console.log("==", x == y); //==는 값만 비교한다. 숫자5와 문자5의 보이는 값은 같다.
console.log("===", x === y); //===는 값과 타입을 둘다 비교한다. 보이는 값은 5로 같지만
//타입이 달라서 false가 뜨게 된다. JS에서는 ===를 선호하고 많이 이용한다.

console.log("!=", x != y);
console.log("!==", x !== y);

let c;
let d = null;
console.log(c == d);
console.log(c === d);




