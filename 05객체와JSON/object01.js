/* 객체 - {키 : 값} 형태로 여러값을 저장해놓은 구조. */

let person = {
    name: "순자",
    age: 20,
};

console.log(typeof(person)); //object (객체)

//객체의 값을 확인하기
console.log(person.name); //.으로 접근 가능
console.log(person["name"]); //[""]으로 접근 가능

//객체의 값을 수정하기
person.age = 30;
person["age"] = 31;
console.log(person);

//객체의 값을 추가하기 (새로운 키: 값)
person.hobby = ["잠자기", "코딩하기"];
console.log(person);

//객체의 값을 삭제하기 (delete 키워드 이용)
delete person.hobby; //hobby 키:값 삭제
console.log(person);

//객체에는 함수도 저장될 수 있다.

let people = {
    name : "길동",
    sayHello : function() {
        console.log("저의 이름은 " + this.name + "입니다."); //this 키워드는 "자기자신"을 의미함
    }
}

console.log(people.name);
people.sayHello();


console.log(`================================`);

//본인 이름의 객체를 생성
//키갑: name, age, cm, hello(함수), hobby 배열

let me = {
    name : "김의재",
    age : 27,
    cm : 175,
    hello : function () {
        console.log(`안녕하세요 저는 ${this.name} 이고 ${this.age}세 입니다. 키는 ${this.cm}cm 입니다.`);
    },
    hobby : ["노래", "당구", "게임"]
};

me.hello();
console.log(`저의 취미는 ${me.hobby} 입니다.`);

