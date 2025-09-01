//매개변수로 배열을 받고, 배열을 반환하는 함수.
/* 
배열에 값중에서 홀수만 필터링해서, 새로운 배열을 반환하는 함수
매개변수 -> [1,2,3,4,5]
반환 -> [1,3,5]
*/

function getNum(arr) {
    //배열을 반복해서, 홀수인 경우는 새로운 배열에 추가
    let newArr = [];
    for(let i = 0; i<arr.length; i++) {
        if(arr[i] % 2 !== 0){ //홀수 판별
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
//let myArr = [1,2,3,4,5];
//console.log(getNum(myArr));
console.log(getNum([1,2,3,4,5]));
