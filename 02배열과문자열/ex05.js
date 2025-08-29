// 2차원 배열
let matrix = [ 
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log(matrix[0]); //[1,2,3]
console.log(matrix[0][0] ); //1
console.log(matrix[1][0] ); //4
console.log(matrix[2][2] ); //9

//2차원 배열의 순회
console.log("-------------------------------------");
for(let i = 0; i < matrix.length; i++) {   
    for(let j = 0; j < matrix[i].length; j++) {
        console.log( matrix[i][j]); //i행, j열
    }
}
console.log("-------------------------------------");
//과목별 평균구하기
let students = [
    ["철수", 76, 34, 23],
    ["정재", 30, 99, 76],
    ["남규", 76, 87, 54],
    ["남수", 98, 76, 45]
];
let kor = 0;
let eng = 0;
let math = 0;
for(let i = 0; i < students.length; i++) {
    kor += students[i][1];
    eng += students[i][2]; 
    math += students[i][3];
}
console.log(`kor합계 ${kor}, 평균 ${kor / students.length }`);
console.log(`eng합계 ${eng}, 평균 ${eng / students.length }`);
console.log(`math합계 ${math}, 평균 ${math / students.length }`);

