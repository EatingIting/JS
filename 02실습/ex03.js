/* 1. 학생별 점수의 평균을 구해보세요. (중첩) */
let students = [
    ["철수", 76, 34, 23],
    ["정재", 30, 99, 76],
    ["남규", 76, 87, 54],
    ["남수", 98, 76, 45]
];

for (let i = 0; i < students.length; i++) {
    let studentInfo = students[i];
    // console.log(`학생의 정보 : ${studentInfo}`);

    let name = studentInfo[0];
    // console.log(`학생의 이름 : ${name}`);
    
    let sum = 0;

    for (let j = 1; j < studentInfo.length; j++) {
        sum += studentInfo[j];
    }
    let average = sum / (studentInfo.length - 1);
    console.log(`${name}: 평균 ${average.toFixed(1)}점`);
}

/* 2. 가장 비싼 상품을 찾아서 출력해주세요. */
let products = [
    ["노트북", 12000000],
    ["스마트폰", 800000],
    ["태블릿", 500000],
    ["헤드폰", 300000],
    ["시계", 20000000]
];

// let product = products[0][0];
let productName = products[0][0];
// let price = products[0][1];
let productPrice = products[0][1];
for(let i = 0; i<products.length; i++) {
    if(productPrice < products[i][1]) {
        productName = products[i][0];
        productPrice = products[i][1];
    }
}
console.log(`${productName}, ${productPrice}`);
