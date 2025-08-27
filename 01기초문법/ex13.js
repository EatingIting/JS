//for - 1 ~ 10까지의 합

/* for(초기값; 조건; 증감식;) {

} */


for(let i = 1; i<=10; i++) {
    console.log(i); //1부터 10까지 i를 증가한 값을 출력한다.
}
console.log(`==================`);


let sum = 0;
for(let i=1; i<=10; i++) {
    sum += i; //1부터 10까지 i를 증가하고 그 값을 sum 변수에 누적으로 합산시킨다.
}
console.log(sum);
console.log(`==================`);



for(let i=10;i>=1;i--){ //초기값 10부터 1보다 크거나 같아질때까지 i를 감소시킨다.
    console.log(i);
}
console.log(`==================`);
