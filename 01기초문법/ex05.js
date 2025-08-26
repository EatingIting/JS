//데이터타입 (각 변수들은 암묵적으로 데이터에 대한 종류를 가지고 있다.)

let name = "홍길동"; //string
let age = 20; //number
let kg = 55.14 // number - 정수, 실수 상관 없음.

console.log(name + "님의 나이는 "+ age + "세 이고 몸무게는 " + kg + "입니다.");

let bool = true; //boolean 참
bool = false; //boolean 거짓
console.log("거짓은 영어로 :",bool);

//null - 초기화는 했지만, 값이 없을때 나타남
/* let x = document.getElementById("이런건 화면에 없다."); */ //null 값이 나와야 하지만 이 확인은 html로 가져가야 확인할 수 있다.

//undefined - 변수 초기화를 하지 않은 경우에 나타남.
let y;
console.log(y); //undefined;

let arr = ["홍길동","이순신","유관순"];

let obj = {};

//변수에 타입 확인이 필요한 경우에 typeof 키워드로 확인할 수 있다.
console.log(typeof(name));
console.log(typeof(age));
console.log(typeof(kg));
console.log(typeof(bool));

console.log(typeof(y));
console.log(typeof(arr));
console.log(typeof(obj));

