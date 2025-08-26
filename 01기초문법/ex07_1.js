//산술연산자

let a = 5 * 3;
let b = 5 / 3;
let c = 5 % 3;

console.log(a, b, c);
console.log(parseInt(b)); //실수 -> 정수로 변경

//전위연산 후위연산 차이
let x = 5;
let pre = ++x;
console.log("x는: ",x);
console.log("pre는: ",pre);

//후위연산 - 먼저 대입하고, 이후에 증가
let y = 5;
let post = y++;
console.log("y는: ",y);
console.log("post는: ",post);

