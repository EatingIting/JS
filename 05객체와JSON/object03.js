/*
JSON => 자바스크립트 오브젝트 표기법 (문자열) 
네트워크상에서 데이터를 교환할때, 사용하는 표준문법 
*/

let obj = {name: "홍길동", age:20}; //Object
let json = '{"name:" : "홍길동", "age": 20 }'; //JSON //key값과 문자열에는 큰따옴표가 반드시!! 붙어야한다.

//오브젝트 => JSON 형변환 - JSON.stringify();

let result = JSON.stringify(obj); //key에 큰따옴표가 추가된 상태로 바꿔줌.
console.log(result);

//JSON => 오브젝트 형변환- JSON.parse();

let result2 = JSON.parse(result); //key에 큰따옴표가 없는 상태로 바꿔줌. (json 파싱)
console.log(result2);

//JSON 데이터는 키와 모든 문자열값이 ""로 묶여 있어야 한다.

let result3 = JSON.parse('{addr : "서울"}'); //key값에 큰따옴표가 없어서, 문법 에러 발생.
console.log(result3);
