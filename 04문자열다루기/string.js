/* 문자열 다루기 - 코딩테스트에서 아주 유용하고 자주 나옴 */

let str = 'hello world javascript';

console.log(str.length); //문자열의 길이를 알 수 있는 메서드(속성) - 공백 포함 길이가 22

//문자열 한글자 자르기.
let s1 = str.charAt(3);
console.log(`index 3번의 문자열은 : ${s1}`);
console.log(`index 5번의 문자열은 : ${str.charAt(5)}`);

//특정 문자 기준으로 문자열 자르기
let s2 = str.split("");
console.log(s2);

let s3 = str.split(" ");
console.log(s3);

//특정 문자의 위치 자르기
let s4 = str.substring(6,11); //6번째 이상, 11번째 미만의 문자를 추출
console.log(`6~11사이의 문자열 : ${s4}`);

let s5 = str.substring(10); //1개만 주면, 10미만 문자열 절삭. 즉, 10이상의 문자열만 출력
console.log(`10미만 문자열 절삭 : ${s5}`);


//특정 위치로 문자열 찾기
console.log(`l이 처음으로 발견된 위치 : ${str.indexOf('l')}번 index`);
//hello world javascript
console.log(`${str.indexOf('o',5)}`); //5번째 위치에서부터 문자열 'o'를 찾아라.

console.log(`마지막부터 a찾기 ${str.lastIndexOf('a')}`); //뒤에서부터 탐색함 v다음의 a가 나오게 되고, 앞에서부터 15번째 인덱스다.

console.log(`포함되어 있으면 true 없으면 false : ${str.includes('java')}`);

console.log(`hell로 시작하면 true 아니면 false : ${str.startsWith(`hell`)}`); //이 문자열로 시작하는가?

console.log(`헑! 이라는 문자로 끝나면 true 아니면 false : ${str.endsWith(`헑!`)}`); //이 문자열로 끝나는가?


//문자열 반환 - **** 원본문자열은 변화 없음 ****
console.log(`=`.repeat(20)); //문자열 20회 반복

console.log(str.replace("l", "헐")); //첫번째로 발견되는 'l' => '헐' 변환
console.log(str.replaceAll("l", '헉!')); //문자열에 존재하는 모든 'l' => '헉!' 변환

console.log(` Hello         `.trim()); //양쪽의 공백을 제거

let text = "Hello";
console.log(text.toUpperCase()); //문자열 전부 대문자로 바꾸기
console.log(text.toLowerCase()); //문자열 전부 소문자로 바꾸기



/* 지금까지 했던 모든 원본 str은 바뀌지 않았다. */