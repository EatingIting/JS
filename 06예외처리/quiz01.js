/* 
    1. registUser(유저객체)를 하나 생성한다.
    2. 전달된 유저객체의 name값이 2글자 이하이거나, 비어있으면 예외처리를 진행한다.
    3. 유저객체 안의 name값이 정상값이라면, 유저의 이름을 반환한다.
*/

let user = {name: "", addr: "서울시"};

let registUser = (obj) => {
    try {
        if(obj.name.length <= 2 || obj.name === null) {
            throw new Error("사용자의 이름을 정확하게 적어주세요.");
        } 
        return obj.name;
    } catch (error) {
        console.log(error.message);
        return null;
    }
}

user.name = "김";
let result1 = registUser(user);
console.log("반환된 값:", result1);

user.name = "김의재";
let result2 = registUser(user);
console.log("반환된 값:", result2);