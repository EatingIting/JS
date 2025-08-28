//반복문의 중첩 활용
/* 
*
**
***
****
*****
반복의 회전은 바깥회전에 따라서 안쪽회전이 바뀔 수 있음.

바깥반복문 - 행
안쪽반복문 - 별출력
*/
// let star = 5;
// let result1 = '';
// for(let i = 1; i<=star; i++) {
//     for(let j=1;j<=i;j++) {
//         result1 += '*';
//     }
//     result1 += '\n';
// }
// console.log(result1);

console.log(`========================`);

let star = 5;
let str = '';
for(let i = 1; i<=star; i++) {
    for(let j = 1; j<=(star+1)-i; j++) {
        str += '*';
    }
    str += '\n'
}
console.log(str);
