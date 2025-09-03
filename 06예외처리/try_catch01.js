/* 
    예외처리 - 예외(에러)가 발생했을 때, 프로그램의 흐름을 정상으로 처리하는 과정
*/

try {
    let str = '{name: "홍길동"}';
    let obj = JSON.parse(str); //systax (문법) 에러 발생 - 중단
    console.log(obj);    
} catch (error) {
    console.log(error,"JSON 타입이 아닙니다.");
} finally { //옵션 - 에러가 발생하던, 발생하지 않던 무조건 실행될 문장이 들어간다.
    console.log("무조건 실행되는 문장");
    
}
console.log("프로그램 정상 종료.");