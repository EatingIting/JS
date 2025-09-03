/* forEach - 고차함수 - 함수의 매개변수로 함수가 들어가는 유형 (JS가 좋아하는 문법) */
//forEach - 반복을 대신함

let arr = [1,2,3,4,5,6,7];

let mySome = function(item, index) {
    console.log(`값 : ${item}, 인덱스 : ${index}`);
    
}

arr.forEach(mySome); //mySome에는 절대 소괄호를 붙이지 않는다. 소괄호를 붙아면 함수를 호출하겠다는 의미.

arr.forEach(function(item, index) {  //위 코드와 완전히 같은 코드이다.
    console.log(`값 : ${item}, 인덱스 : ${index}`);
}); 
//forEach의 매개변수에는 첫번째 값은 값, 두번째 값은 인덱스 번호로 약속되어있다.

arr.forEach((item,index) => { //화살표 함수로도 표현 가능.
    console.log(`값 : ${item}, 인덱스 : ${index}`);
});

arr.forEach(item => console.log(`값 : ${item}`)); //만약 index값이 필요없다면, 하나만 받아와도 되고, 소괄호 지우고 중괄호 지워서 한줄코드로 바꿀 수 있다.


console.log(`===============================================`);

//map - 반환에 담긴 값으로 새로운 배열을 만들어서 돌려줌.
let newArr = arr.map(function(item, index){
    return item * item;
    
});

let newArr2 = arr.map(item => item * item); //위 코드를 간결하게 다시 작성.

console.log(newArr);
console.log(newArr2); //결과 동일

console.log(`===============================================`);

//filter - return에 true인 값으로 조건부 필터링
let newArr3 = arr.filter(function(item, index) {
    return item % 2 === 0;
});
console.log(newArr3);
