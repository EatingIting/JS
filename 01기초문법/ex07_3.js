//대입연산자 =, +=, -=, *=, /=, %=
let a = 3;
a += 3;
a =+ 3; //a= +3 으로 인식하므로 순서에 주의해야함!!

console.log(a); //3

let score = 10;
score -= 5;

console.log(score); //score = score - 5. score가 위에서 10으로 선언됐으므로 10-5는 5를 score에 넣어준다.

score *= 6;
console.log(score); //score = score * 6. score가 위에서 5로 선언됐으므로 5*6은 30. 

score /= 4; 
console.log(score); //score = score / 4. score가 위에서 30으로 선언됐으므로 30/4의 몫은 7.5

score %= 3;
console.log(score); //score = scroe % 3. scroe가 위에서 7.5로 선언됐으므로 7.5 / 3의 나머지 1.5.




