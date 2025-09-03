/* 
    
*/

function divide(a, b) {
    //a를 b로 나눈 몫을 반환하는 함수
    //b가 0이면 안된다.
    try {
        if(b === 0) {
            throw new Error("b는 0일수 없습니다."); //예외를 직접 생성한다.
        }

        if(typeof a !== 'number' || typeof b !== 'number') {
            throw new Error("매개변수는 숫자여야 합니다.");
        }

        return a / b;
    } catch (error) {
        console.log(error.message); //에러의 메세지를 볼 수 있다.
        return null; 
    }
}

console.log(divide(10, 0));
console.log(divide("a","b"));
