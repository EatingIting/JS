//1. 이 배열의 합계와 평균을 출력
let number = [10,20,30,40,50];

let sum = 0;
let avg = 0;
for(let value of number) {
    sum += value;
}
console.log(`이 배열의 합계는 ${sum} 이고, 평균은 ${parseFloat(sum/number.length)} 입니다.`);

//2. 이 배열에서 최대값, 최소값 출력 (변수를 잘 활용해야 함)
let score = [21,85,92,70,96,91,100,60,23,105];

let maxValue = score[0];
let lowValue = score[0];

for(let i = 0; i < score.length; i++) {
    if(score[i] >= maxValue) {
        maxValue = score[i]; 
    }
    if(score[i] <= lowValue) {
        lowValue = score[i];
    }
}
console.log(`최대값 : ${maxValue}`);
console.log(`최소값 : ${lowValue}`);

//3. 짝수 필터링 (이 배열에서 짝수판 필터링 하여 evenNum에 저장하세요.)

let numbers = [1,2,3,4,5,6,7,8,9,10];
let evenNum = [];
for(let i in numbers) {
    if(numbers[i] % 2 === 0) {
        evenNum.push(numbers[i]);
    }
}
console.log(evenNum);

//4. 배열의 값을 뒤집어서 reverse 배열에 저장하세요.
let arr = [1,2,3,4,5];
let reversed = [];
for(let i = arr.length-1; i>=0; i--) {
    reversed.push(arr[i]);
}
console.log(reversed);




//5.target값이 배열에 포함되어 있으면 해당 인덱스를 출력, 없으면 -1을 출력하세요.
//힌트 - boolean 변수를 이용
let search = ['a','b','c','d','e'];
let target = 'e';
let exist = false;
let answer = 0;

for(let i in search) {
    // console.log(search[i], target);
    if(search[i] === target) {
        exist = true; // 찾음 or 못찾음
        answer = parseInt(i)+1; //인덱스값 기록
        break;
    }
}
if(exist) {
    console.log(`target문자 ${target}은 ${answer}번째에 존재합니다.`);
} else {
    console.log('-1 (target문자는 없습니다.)');
}




//6. word배열의 문자열의 길이를 저장하는 wordLength배열을 만들어주세요. (ex)apple은 5 banana는 6이니까 출력결과 5,6,5,5,6 ) 
let word = ['apple', 'banana', 'melon', 'grape', 'orange'];
let wordLength = [];

for(let i in word) {
    wordLength.push(word[i].length);
}
console.log(wordLength);
