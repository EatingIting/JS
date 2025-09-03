/* 
1. palindrome 매개변수로 String 값을 받아, 회문 여부를 검사하는 함수입니다.
2. 회문: 똑바로 읽으나 거꾸로 읽으나 똑같은 단어나 문장.
3. ex) 다시 합창 합시다, 다 같은 것은 같다, 아 좋다 좋아 등
4. 문장은 공백을 포함하여 받을 수 있습니다.
5. 회문이라면 true, 아니라면 false 를 리턴합니다. 
*/

//1번 방법
let palindrome = str => {
    str = str.replaceAll(" ", "");
    let str2 = '';
    
    for(let i = str.length-1; i>=0; i--) {
        str2 += str[i];
    }
    console.log(`들어온값 : ${str}`);
    console.log(`뒤집은값 : ${str2}`);
    return str === str2;
};

let test1 = '아 좋다 좋아';
let test2 = '다시 합창 합시다';
let test3 = '다시 합창 하지 맙시다';
console.log(palindrome(test1));
console.log(palindrome(test2));
console.log(palindrome(test3));

//2번 방법
function palindrome1(param) {
    let word = param.replaceAll(" ", "");
    return word === word.split("").reverse().join(""); //함수형 프로그래밍 방식 (연쇄적으로 메서드를 써나가는 방식)
    
}

console.log(palindrome1("다시 합창 합시다"));
