/* 배열안에 객체가 저장되는 형태 */

let list = [
    {id : 1, title : "Hello", content: "허잇!", subject : ["java"]},
    {id : 2, title: "bye bye", content: "춥다", subject : ["css","js"]},
    {id : 3, title : "say good bye", content : "집에가고싶다", subject : ["git"]}
];

console.log(list[0]["title"]);
console.log(list[0].title);

console.log(list[1].subject[0]); //list 1번배열의 subject 0번 배열 뽑아내기

//배열을 반복으로

for(let i = 0; i<list.length; i++) {
    console.log(list[i]); //순서대로 객체가 나오게 됨.
    console.log(list[i].id); //id들만 출력 가능.
    console.log(list[i].title); //title들만 출력 가능.
    console.log(list[i].content); //content들만 출력 가능
    for(let j = 0; j < list[i].subject.length; j++) {
        console.log(list[i].subject[j]); //subject들만 출력 가능
    }
}