//배열에서 사용하는 다양한 함수.

//배열의 선언을 다른 방식으로 선언해본다. new Array() - 추천 방식은 아니다.

/* let arr = new Array(3); //크기가 3이면서, 비어있는 배열을 생성
console.log(arr);

let arr2 = new Array(1,2,3); //값을 2개 이상 지정하면, 초기값 지정함. let arr2 = [1,2,3]과 같다.
console.log(arr2);
 */

let arr = [1,2,3,4,5];

arr.push(6); //배열의 맨마지막 요소에 6이라는 값을 추가.
console.log(arr);

let item1 = arr.pop(); //배열의 맨마지막 값을 빼서, 돌려준다.(반환)
console.log(arr);
console.log(`pop으로 나온 값 : ${item1}`);

arr.unshift(100); //배열의 맨앞 요소에 100이라는 값을 추가.
console.log(arr);

let item2 = arr.shift(); //배열의 앞에서 제거 후 돌려준다.(반환)
console.log(item2);
console.log(arr);

// arr.splice(1,2); //첫번째 인덱스에서, 2개를 제거한다는 의미.
// arr.splice(1,1); //첫번째 인덱스에서, 1개를 제거.
arr.splice(1, 0, 'a', 'b', 'c', 'd', 'e', 'f'); //값을 3개 이상주면, 추가해준다.
console.log(arr);

//탐색관련 함수
let item3 = arr.indexOf(4); //4가 있는 위치를 나한테 반환(알려준다)한다.
console.log(`4가 있는 위치 : ${item3}`); //만약 찾는값이 없다면 -1을 반환한다.

if (arr.indexOf('a') != -1) { //배열에 'a'가 존재하지 않지 않는다면.
    console.log(`이 배열에서 'a'는 존재합니다. ${arr.indexOf('a')}번째에 존재함`);
}

if(arr.includes('a')) { //배열에 'a'가 있다면
    console.log(`이 배열에서 'a'는 존재합니다. ${arr.indexOf('a')}번째에 존재함`);    
}

//배열의 병합(합치기)

let arr3 = [1,2,3];
let arr4 = [4,5,6];

let result = arr3.concat(arr4); //두 배열을 합친 새로운 배열을 반환
console.log(result); //[1,2,3,4,5,6]

//배열의 오름차순 정렬