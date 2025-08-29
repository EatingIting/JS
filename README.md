## 🔰 JavaScript란?

웹사이트에 동적인 기능을 넣기 위해 만든 프로그래밍 언어

HTML = 뼈대, CSS = 디자인, JavaScript = 움직임 / 동작

웹 브라우저에서 바로 실행 가능

Node.js, React, Vue.js 등을 통해 백엔드, 앱, 게임 개발 등 다양한 분야에서도 사용됨
---

## 🧠 특징
항목	설명
동적 언어	변수 타입이 유연해서 코드가 짧고 빠르게 작성됨
인터프리터 언어	브라우저가 바로 해석해서 실행함 (컴파일 X)
이벤트 기반	버튼 클릭, 스크롤 등 사용자 행동에 반응
---

## 📚 자바스크립트의 버전

2015년 기준으로 ES5 문법과 ES6 문법으로 나뉨
해마다 새로운 버전이 발표되지만, 큰 변화는 ES5 → ES6 시점에서 일어남
따라서 ES5와 ES6 구분하여 학습하는 것이 중요

---

## ✅ 공부하게 될 내용들

📌 커리큘럼
![자바스크립트의 기본 구조](./images/curriculum.png)

## ✅ JS 적용 방법
![JS적용방법](./images/script-location.png)

---
## 🖨️ 출력 방법
| 출력 방법 | 사용 함수	| 설명	 | 예시 코드 | 비고 |
|------------| ------------ | ----- | ----------- | -----|
콘솔 출력 |	console.log() | 개발자 도구의 콘솔에 메시지를 출력 | console.log("Hello"); | 디버깅용으로 가장 많이 사용 |
경고창 출력 | alert() | 팝업 알림 창으로 사용자에게 메시지 전달 | alert("Warning!"); | 사용자 인터랙션용 |
HTML 문서에 출력 | document.write() | HTML 문서에 직접 텍스트 출력 | document.write("Hello"); | 학습용, 실무에서는 거의 사용 안 함 |

출력은 위에서 아래 순서대로 실행됨

외부 JS 파일은 <head> 혹은 <body> 태그 맨 마지막에 삽입

삽입 위치에 따라 실행 순서가 달라짐

``` html
<!DOCTYPE html> 
<html> 
<head> 
  <title>Document</title> 
  <script src="ex01.js"></script> 
</head> 
<body> 
  <script> 
    console.log("Hello World!"); // 세미콜론은 선택이지만, 웬만하면 찍는 습관!
  </script>
</body> 
</html>
```

![예시](./images/example.png)

---

## 🆔 식별자(이름 짓는 규칙)

* 대소문자 구분

* 카멜 표기법 사용

* ❌ phone_number

* ✅ phoneNumber

* 띄어쓰기 금지

* 예약어(키워드) 사용 금지

* 상수는 대문자 사용 (const API_KEY = 'abc123')

---

## 📦 변수
자바스크립트의 변수는 데이터를 저장하기 위한 "이름이 붙은 공간"

하나의 값만 저장 가능

선언과 초기화를 통해 사용

값은 언제든 변경 가능

| 키워드 | 특징 |
|------------| ------------ |
| var | ES5 이전부터 사용 / 함수 스코프, 중복 선언 가능 / 호이스팅 발생 (초기화는 X) |
| let | ES6에서 도입 / 블록 스코프, 중복 선언 불가 / TDZ(Temporal Dead Zone) 발생 |
| const | ES6에서 도입 / 블록 스코프 / 재할당 불가 / 객체와 배열 내부 값은 변경 가능 |

---

## 🧾 데이터 타입 (Data Type)

값의 종류나 형태를 나타내는 분류로, 컴퓨터가 값을 어떻게 저장하고 처리할지 결정하는 기준이 됨
기본 데이터 타입

* string – 문자열  
예: "hello", 'JavaScript' (문자들이 연결된 형태)

* number – 숫자  
예: 10, 3.14 (실수, 정수 모두 숫자타입)

* boolean – 불리언  
예: true, false (참,거짓만 저장 가능)

* null – 값이 "없음"

* undefined – 값이 할당되지 않음

* array - 배열  
예: [1,2,3,4], ["홍길동","이순신","유관순"]

* object – 객체 (배열, 함수 포함)  
예: 배열은 대괄호 객체는 {}중괄호다.

---
## ✅ 형변환

**형변환** 은 자바스크립트에서 **값의 데이터 타입을 다른 타입으로 바꾸는 것** 을 말합니다.

예: 숫자를 문자열로, 문자열을 숫자로 바꾸는 등

* 자동 형변환  
``` JavaScript
var result = "5" * 2;   // 문자열 "5"가 숫자 5로 바뀜
console.log(result);    // 10

var result2 = "5" + 2;  // 숫자 2가 문자열 "2"로 바뀜
console.log(result2);   // "52"
```

* 명시적 형변환  
``` JavaScript
parseInt("10");     // 10
parseFloat("3.14");   // 3.14
"" + 100; //문자열로 변함 
```
---

## ✅ 연산자

####  1. 산술 연산자 +, -, *, /, %, ++, --

``` JavaScript
var a = 10;
var b = 3;

console.log("덧셈:", a + b);       // 13
console.log("뺄셈:", a - b);       // 7
console.log("곱셈:", a * b);       // 30
console.log("나눗셈:", a / b);     // 3.333...
console.log("나머지:", a % b);     // 1

a++;
console.log("a 증가 (++):", a);    // 11

b--;
console.log("b 감소 (--):", b);    // 2
```

#### 2. 비교 연산자 ==, ===, !=, !==, <, >, <=, >=, !

``` JavaScript
var x = 5;
var y = "5";

console.log("== :", x == y);       // true (값만 비교)
console.log("=== :", x === y);     // false (값 + 타입 비교)
console.log("!= :", x != y);       // false
console.log("!== :", x !== y);     // true
console.log("< :", x < 10);        // true
console.log("> :", x > 10);        // false
console.log("<= :", x <= 5);       // true
console.log(">= :", x >= 6);       // false
```

#### 3. 대입 연산자 =, +=, -=, *=, /=, %= 등

``` JavaScript
var score = 10;

score += 5;   // score = score + 5
console.log("+= :", score);       // 15

score -= 3;
console.log("-= :", score);       // 12

score *= 2;
console.log("*= :", score);       // 24

score /= 4;
console.log("/= :", score);       // 6

score %= 4;
console.log("%= :", score);       // 2
```

#### 4. 논리 연산자 &&, ||, !
``` JavaScript
var isAdult = true;
var hasID = false;

console.log("AND (&&):", isAdult && hasID); // false
console.log("OR (||):", isAdult || hasID);  // true
console.log("NOT (!):", !isAdult);          // false
```

#### 5. 삼항 연산자 조건 ? 참 : 거짓
``` JavaScript
var age = 20;

var result = (age >= 18) ? "성인" : "미성년자";
console.log("삼항 연산자:", result); // 성인
```

**👍연산의 우선순위**

- 각 연산자들은 먼저 계산되는 우선순위가 있습니다.
- 쉽게 생각해서 수학에서 사용하는 형태와 같습니다.

소괄호 > 단항연산자 > 2항연산자 > 3항연산자 > 대입
으로 생각하면 된다.

---

## 입력
자바스크립트에서 **사용자 입력**을 받는 가장 간단한 방법은 **`prompt()`** 함수를 사용하는 것입니다.

.js 파일에서는 사용할 수 없습니다.

html에서만 확인할 수 있어요!

``` JavaScript
let name = prompt("당신의 이름은?");
console.log("안녕하세요, " + name + "님!");
```

- prompt()는 사용자에게 입력을 받을 수 있는 입력 창을 띄웁니다.
- 입력된 값은 문자열(string)로 반환 됩니다.
- 입력을 취소하면 null이 반환 됩니다.

---

# 제어문

![제어문](./images/control.png)

#### 조건문 if

| 구문 | 설명 |
| ---- | ---- |
| if | 조건이 참이면 코드 블록 실행 |
| else if | 앞의 조건이 거짓이고, 이 조건이 참이면 실행 |
| else | 위 조건들이 모두 거짓이면 실행 |

``` JavaScript
var age = 20;

if (age >= 20) {
  console.log("성인입니다");
} else {
  console.log("어린이입니다");
}
```
변수 age는 20으로 초기화 시켜주었고, if문으로 age가 20보다 크면 성인 아니면 어린이를 출력하는 코드이다.
age≥20으로 조건을 주었고 20이 아니라면 즉, 20미만의 숫자면 “어린이입니다.”가 출력된다.

``` JavaScript
var age = 20;

if (age >= 20) {
  console.log("성인입니다");
} else if (age >= 13) {
  console.log("청소년입니다");
} else {
  console.log("어린이입니다");
}
```
위 코드도 완전 같은 형태의 코드다.
age변수에 20을 초기화 해주었고, 20보다 크거나 같으면 “성인입니다.”를 출력하고, 만약 20보다 작고 13보다 크다면 “청소년입니다.”를 출력 그 외의 나이는 “어린이입니다.”를 출력하면 된다.
위와 같이 if문은 if와 else만 있는것이 아니라, else if 라는 제어문도 존재한다.
처음 if문에서 조건이 TRUE가 아니라면, else if로 넘어가고 만약 여기서도 TRUE가 아니라면, else로 넘어가는 구조이다.

---

# 조건문 switch

``` JavaScript
var day = 3;
var dayName;

switch (day) {
  case 1:
    dayName = "월요일";
    break;
  case 2:
    dayName = "화요일";
    break;
  case 3:
    dayName = "수요일";
    break;
  case 4:
    dayName = "목요일";
    break;
  case 5:
    dayName = "금요일";
    break;
  default:
    dayName = "주말입니다";
}

console.log(dayName); // 출력: 수요일
```

switch문은 if else와 유사한 형태이다.
예시에서 보면 swtich에 day변수를 넣어주고, day가 만약 1이면 “월요일”을 dayName변수에 넣는 형태이다.
만약 2라면 “화요일”을 dayName 변수에 넣어준다.
위 코드에서는 3으로 했으니 dayName은 수요일이 출력이 될 것이다.

# 반복문 while

``` JavaScript
while (조건) {
// 조건이 참일 때 반복 실행될 코드
}
```

반복문의 가장 기초이다.
while문은 옆에 항상 조건과 같이 들어온다.
하지만 while문의 조건을 제대로 정해주지 않는다면, 무한 루프에 빠질수도 있다.
그래서 반드시 조건을 변화시키는 코드가 필요하다.

``` JavaScript
var i = 1;

while (i <= 5) { 
  console.log(i);
  i++; // i 값을 증가시켜 조건이 언젠가 false가 되게 함
}
```

위의 예시는 i++로 무한반복문에 빠지지 않게 i값에 변화를 주었다.

i가 1로 시작했고, while에서 i가 5이하까지 반복을 한다.

그리고 i++로 i를 증가시켰다.

그러면 결과값은 1, 2, 3, 4, 5가 나오게 될 것이다.

---

# 반복문 for

``` JavaScript
for (초기값; 조건; 증감식) {
  // 반복 실행할 코드
}
```

for문의 구조는 위와 같은 형태다.

while문은 초기값을 지정해주고 조건을 while에 적어주고, 증감식을 while문 안에 넣어줘야 하는 방식이었다.

그런데 for문은 초기값과 조건 증감식을 한번에 한줄로 적어줄 수 있다.

``` JavaScript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

이렇게 하면 i는 1부터 5까지 i를 하나씩 늘려가며, 반복한다.

for문을 저렇게 적어주고 log를 찍어보면 1, 2, 3, 4, 5가 나올것이다.

for문과 while문에서의 차이점은 없지만, 문법에서 차이가 있다.

let 변수는 ES6에서부터 생긴 문법인데, let a = 1;로 선언을 해주었다면 더이상 let a = 2;로 같은 이름으로 다시 선언이 불가능하다. 

let a = 1; 이후 a = 2;는 가능.

ES5에서부터 쓰던 var 변수는 var a = 1;로 선언해주었다면 var a = 2;로 다시 선언이 가능하다.

var a = 1; 이후 var a =2; 가능.

즉, 중괄호 안에서 쓰인 let 변수는 중괄호 바깥에서는 쓸 수 없다는 이야기이고, 중괄호 안에서 생성된 변수는 해당 중괄호 내부에서만 쓸 수 있는 변수이다.

하지만 for문은 for문 중괄호 안에서 let 변수로 만들어주었기 때문에, 다른 for문에서도 똑같이 let을 이용할 수 있다.

---

# 중첩 반복문

for문은 중첩으로도 사용이 가능하다. if 안에 if 넣고 또 if를 넣는것처럼

for문도 for문 안에 for넣고 또 for문을 넣을수도 있다.

``` JavaScript
for(let i = 1; i <= 10; i++) {
    console.log(`${i}번째 회전`);
    
    for(let j = 1; j <= 9; j++) {
        console.log(`${i} - ${j}`);
    }
    console.log(`${i}번쩨 회전 끝!`);
    console.log("==============");
    
}
```

중첩 for문의 가장 기초가 되는 예제이다.

첫번째 for문은 i를 1부터 10까지 1씩 증가시킨다.

두번째 안에 들어있는 for문은 j를 1부터 9까지 1씩 증가시킨다.

이 for문은 안쪽 for문이 1회전부터 9회전까지 다 돌면 i가 1 증가된다.

즉, 안쪽 for문이 다 돌아야 바깥쪽 for문이 1이 증가되는 형태이다.

이 for문을 응용해서 구구단을 2단부터 9단까지 차례로 나열을 해볼 수 있다.

``` JavaScript
for(let i = 2; i <= 9; i++) {
    console.log(`=== ${i}단 ===`);
    
    for(let j = 1; j<=9; j++) {
        console.log(`${i} x ${j} = ${j*i}`);
    }
    
}
```

위 설명과 마찬가지로 i는 우선 2부터 9까지 1씩 증가하는 형태이다.

그리고 안쪽 for문으로 넘어와서 j를 1부터 9까지 1씩 증가시킨다.

이렇게 코드를 짜게 되면 구구단의 2단부터 출력이 될것이고 2 * 1 = 2, 2 * 2 =4, 2 * 3 = 6 … 2 * 9 = 18

이런식으로 출력이 되고, 9 * 9 = 81까지 아주 정상적으로 구구단이 출력될것이다.

i는 단수의 역할이고, j는 곱해줄 수의 역할이다.

``` JavaScript
let star = 5;
let result1 = '';
for(let i = 1; i<=star; i++) {
    for(let j=1;j<=i;j++) {
        result1 += '*';
    }
    result1 += '\n';
}
console.log(result1);
```

이 예제는 중첩반복문의 많이 나오는 기초 예제중 또 다른 하나이다.

우선 star 라는 변수를 5로 초기화 해주었고, i를 1부터 star의값까지 1씩 증가시키면서 반복한다.

안쪽의 for문은 j를 1부터 i값이 될 때 까지 1씩 증가를 시킨다.

그리고 result1 이라는 변수에 *을 중첩으로 저장시키고, 두번째 for문 바깥에 result1에 중첩으로 개행을 시켜준다.

이렇게 되면 ‘*’을 한개 찍고 개행, ‘**’ 개행, ‘***’ 개행 ‘****’ 개행 ‘*****’ 개행

즉,

*

**

***

****

*****

이런식으로 출력이 된다.

이것을 반대로도 해본다.

``` JavaScript
let star = 5;
let str = '';
for(let i = 1; i<=star; i++) {
    for(let j = 1; j<=(star+1)-i; j++) {
        str += '*';
    }
    str += '\n'
}
console.log(str);
```

이 예제는 단순히 반대로 바꾸는거지만 안쪽 for문의 형태가 많이 바뀌었다.

우선 바깥쪽 for문은 동일하니, 신경쓰지 않도록 하고 안쪽 for문은 j가 1부터 star 값에 +1을 해준 값에서 i를 하나 뺀 값까지 j를 반복한다.

이렇게 하면 처음 j는 ‘*****’이 찍히게 되고, i값이 증가할때마다 *이 하나씩 감소하는 형태로 바뀐다.

---

## 무한반복문

for문과 while문 모두 무한히 반복시킬 수 있다.

이 무한반복문은 정확히 횟수를 알 수 없을때 주로 사용되고, 특정 조건 하에 탈출되도록 처리를 한다.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
    while(true) {
        let answer = prompt("3 x 6 = ?");
        let result = parseInt(answer);
        if(result === 18) { //정답이 나오면 무한반복문을 break구문으로 빠져나가게 됨.
            alert("정답입니다.");
            break;
        } else {
            alert("오답입니다.");
        }
    }

    </script>
    
</body>
</html>
```

while(true)는 무한히 반복한다는 뜻이다.

이렇게 무한히 반복하다가, if로 조건을 준다.

if의 조건이 맞아 떨어지면 break구문을 써서 while문을 탈출시킨다.

---

# 배열과 문자열
자바스크립트의 **배열**(Array)은 **여러 개의 값을 순차적으로 저장**할 수 있는 상자 이다.

숫자, 문자열, 객체, 함수 등 **모든 타입의 데이터**를 섞어서 담을 수 있다.

배열은 순서 (index) 개념을 가진다.

자바스크립트 뿐만 아니라 모든 프로그래밍에서 배열의 순서는 0번째 부터 시작한다.

| 항목 | 설명 |
| --- | --- |
| 자료형 | 어떤 타입도 가능 (숫자, 문자열, 객체, 함수 등) |
| 인덱스 | 0부터 시작 (`arr[0]`, `arr[1]`, ...) |
| 길이 | `.length` 속성으로 배열의 길이 확인 (`arr.length`) |
| 동적 크기 | 크기가 자동으로 늘어나거나 줄어듦 |

### 배열의 선언

``` JavaScript
var arr1 = [1, 2, 3];           // 리터럴 방식 (대괄호로 선언함) *추천하는 방식 

var arr2 = new Array(5);        // 생성자 방식 (크기 5생성)

var arr3 = new Array(1, 2, 3);  // 생성자 방식 (크기 3, 초기값 지정))
```
배열의 선언은 이렇게 총 3가지가 있다.

가장 첫번째 방식이 쉽고 간편하며, 아래 2가지 방식으로도 선언이 가능하지만, 웬만하면 첫번째 방식으로 다 되고, 효율적인 측면에서도 이게 가장 좋다.

``` JavaScript
let arr = [1,2,3,4,5]; //크기가 5이면서, 강 상자들의 값을 초기화
console.log(arr);
console.log(`배열의 첫번째 값 : ${arr[0]}`);
console.log(`배열의 마지막 값 : ${arr[4]}`);
```

배열의 초기화는 이런 형태로 주로 많이 하고, 다들 이런식으로 많이 선언한다.

첫번째 값을 알고싶으면 arr[0] 즉 0번째 값, arr[4] 마지막 값이다.

``` JavaScript
arr[0] = 100;
arr[2] = 30;
```

배열의 요소값은 이렇게 변경 가능하다.

``` JavaScript
console.log(`배열의 길이 : ${arr.length}`);
```

코딩을 하다보면 배열의 길이를 모를때도 있는데, 그럴땐 length 함수를 써서 배열의 길이를 알아낼 수 있다.

``` JavaScript
let arr2 = ['바나나', '사과', '수박'];
let arr3 = [1,2,3,"홍길동",true,0];
```

배열은 문자열도 배열에 넣을 수 있고, 서로 다른 형태의 데이터타입도 저장할 수 있다.

하지만 서로 다른 형태의 데이터타입을 저장하면 타입 안정성이라는게 매우 떨어져서 별로 추천하지는 않는 방식이다.

### 배열의 주요 함수들

| 메서드 | 설명 |
| --- | --- |
| `push()` | 배열 끝에 요소 추가 |
| `pop()` | 배열 끝에서 요소 제거 |
| `unshift()` | 배열 앞에 요소 추가 |
| `shift()` | 배열 앞에서 요소 제거 |
| `splice()` | 요소를 추가/제거/변경 |
| `indexOf()` | 해당 값의 인덱스 반환 (없으면 -1 ) |
| `includes()` | 값 포함 여부 확인 (`true` / `false`) |

- 등등이 있으며 MDN에서 확인할 수 있다.

``` JavaScript
arr.push(6);
//arr배열 변수 맨 마지막 끝에 '6' 이라는 요소를 추가해준다.
```

``` JavaScript
let item1 = arr.pop(); //배열의 맨마지막 값을 빼서, 돌려준다.(반환)
console.log(arr);
console.log(`pop으로 나온 값 : ${item1}`); //item1에 6이 들어감.

```

``` JavaScript
arr.unshift(100);
//arr배열 변수 맨 앞에 '100' 이라는 요소를 추가.
```

``` JavaScript
let item2 = arr.shift(); //배열의 앞에서 제거 후 돌려준다.(반환)
console.log(item2);
console.log(arr);
//배열의 맨 앞에서 빼고 item2로 반환시킨다. item2에 100 값이 들어감
```

``` JavaScript
arr.splice(1,2); //첫번째 인덱스에서, 2개를 제거한다는 의미.
arr.splice(1,1); //첫번째 인덱스에서, 1개를 제거한다는 의미.
//ex) [1,2,3,4,5] 였으면 첫번째 구문에서는 [1,4,5]가 되고, 두번째 구문에서는 [1,3,4,5]가 된다.
```

``` JavaScript
let item3 = arr.indexOf(4); //4가 있는 위치를 나한테 반환(알려준다)한다.
console.log(`4가 있는 위치 : ${item3}`);
```

배열의 위치를 반환할수도 있다.

arr.indexOf(4)를 하면 배열의 4번째를 찾아달라는게 아닌, 배열에 ‘4’가 어디에 있는지를 찾아주는 함수이다.

만약 존재하지 않는다면 -1 값이 반환된다.

``` JavaScript
if (arr.indexOf('a') != -1) { //배열에 'a'가 존재하지 않지 않는다면.
    console.log(`이 배열에서 'a'는 존재합니다. ${arr.indexOf('a')}번째에 존재함`);
}

if(arr.includes('a')) { //배열에 'a'가 있다면
    console.log(`이 배열에서 'a'는 존재합니다. ${arr.indexOf('a')}번째에 존재함`);    
}
```

위 처럼 쓰면 indexOf(a)가 -1 이라면 즉, a가 배열에서 존재한다면, log를 찍는 구문이다.

아래는 실제로 존재하는지 존재하지 않는지 찾는 includes 함수이다.

# JavaScript 실습 예제

## 삼항연산자 실습 예제

### 1번 문제  

1. -5 ~ 5 사이의 랜덤한 정수를 생성한다.
2. 이 값이 언제든 절대값으로 나오도록 삼항연산식을 세운다.

``` JavaScript
let number = 5;
let result = number - (Math.random() * 11);
console.log(result);

result < 0 ? -result : result;

console.log(parseInt(result));
```

``` PlainText
출력결과
2.0384263615177094
2
```

### 2번 문제  

1. 1 ~ 10 사이의 랜덤한 정수를 생성한다.
2. 이 숫자가 3의 배수라면 “3의 배수입니다.”, 아니라면 “3의 배수가 아닙니다.” 출력하기.

``` JavaScript
let number = parseInt(Math.random() * 10) + 1;
console.log(number);

let result = number % 3 === 0 ? "3의 배수입니다." : "3의 배수가 아닙니다.";
console.log(result);
```

``` PlainText
출력결과
1
3의 배수가 아닙니다.
```

### 3번 문제  

1. 사용자에게 바구니의 크기를 입력받는다.
2. 사과의 개수를 입력받는다.
3. 사과의 개수와 필요한 바구니의 개수를 출력해준다.

ex) 바구니 크기 = 10, 사과 개수 = 151, 필요한 바구니 수 = 16개
ex) 바구니 크기 = 10, 사과 개수 =150, 필요한 바구니 수 = 15개

``` HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        let basketAmount = prompt("바구니 크기를 입력하세요.");
        let appleAmount = prompt("사과의 개수를 입력하세요.");
        let result = appleAmount % basketAmount >= 1 ? parseInt(appleAmount/basketAmount)+1 : appleAmount/basketAmount;
        
        // let result = appleAmount % basketAmount === 0 ? appleAmount/basketAmount : appleAmount % basketAmount >= 1 ? parseInt(appleAmount/basketAmount)+1 : appleAmount % basketAmount;
				// 중첩 삼항연산자로 품 (비효율적 + 머리아픔)
				document.write("사과 개수 :"+appleAmount+" 바구니 크기 : "+basketAmount+" 필요한 바구니 개수 : "+result);    
    </script>
</body>
</html>
```
---

## if문 실습 예제

### 1번 문제  

1. 키를 실수형으로 입력받는다.
2. 나이를 정수형으로 입력받는다.
3. 키가 140 이상이고, 나이가 8세 이상이면 자이로드롭을 탈 수 있다.
4. 둘 중 하나라도 만족하지 못하면 놀이기구를 탈 수 없다.

``` HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        let height = parseFloat(prompt("당신의 키를 적어주세요."));
        let age = parseInt(prompt("당신의 나이를 적어주세요."));

        if(height >= 140 && age >= 8) {
            document.write("자이로드롭 탑승 가능합니다.");
        } else {
            document.write("놀이기구 탑승이 불가능합니다.");
        }
    </script>
</body>
</html>
```

``` PlainText
출력결과
height에 140, age에 7을 넣으면 else문 동작
height에 139, age에 8을 넣어도 else문 동작
height에 140, age에 8을 넣으면 if문 동작
height 140이상 age 8이상이면 if문 동작 둘중 하나라도 만족하지 못하면 else문이 동작함.
```

### 2번 문제  
1. 두 수를 입력받아서, 큰 수와 작은수를 출력해라
2. 만약 두 수가 같은 수라면 “같은 수 입니다.”를 출력해라.

``` HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        let number1 = parseInt(prompt("첫번째 숫자를 입력해주세요."));
        let number2 = parseInt(prompt("두번째 숫자를 입력해주세요."));
        let result = '';

        if(number1 === number2) {
            result = '첫번째 입력하신 값 '+number1+'은 두번째 입력하신 값 '+number2+'와 같습니다.';
        } else if(number1 > number2) {
            result = '첫번째 입력하신 값 '+number1+'이(가) 두번째 입력하신 '+number2+' 보다 큽니다.'
        } else {
            result = '첫번째 입력하신 값 '+number1+'이(가) 두번째 입력하신 '+number2+' 보다 작습니다.'
        }
        document.write(result);
    </script>
</body>
</html>
```

### 3번 문제  
1. 사용자에게 수를 하나 입력받는다.
2. 이 수가 짝수인지 홀수인지 0인지 음수인지 구분해서 출력하는 프로그램 코드를 작성해본다.
``` HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        let number = parseInt(prompt("숫자를 입력해주세요."));
        let result  = '';

        if(number === 0) {
            result = '입력하신 숫자는 0 입니다.<br>';
        } else if(number < 0) {
            result = '입력하신 ' + number + '은(는) 음수입니다.<br>';
        } else if (isNaN(number)) {
            result = '숫자를 입력해주세요.<br>';
        } else if(number % 2 == 0) {
            result = '입력하신 ' + number + ' 은(는) 짝수입니다.<br>';
        } else {
            result = '입력하신 ' + number + '은(는) 홀수입니다.<br>';
        }
        document.write(result); //if문의 순서를 잘 생각해야한다. 짝수와 홀수를 구분하는 if문을 먼저 썼다면, -2나 -3을 입력했을때, 음수가 아닌 짝수나 홀수가 나오게 된다.

        document.write(number === 0 ? '입력하신 숫자는 0 입니다.' : number < 0 ? '입력하신 ' + number + '은(는) 음수입니다.' : isNaN(number) ? '숫자를 입력해주세요.' : number % 2 === 0 ? '입력하신 ' + number + '은(는) 짝수입니다.' : '입력하신 ' + number + '은(는) 홀수입니다.');
    </script>
</body>
</html>
```
이 문제는 다른 if문 문제와는 약간 다르다.

if문 순서도의 중요도를 나타내는 문제이다.

짝수와 홀수를 구하는 코드를 먼저 작성하고 0과 음수를 구하는 코드를 뒤에 적었다면 -2를 하였을때, 음수가 아닌, 짝수로 나오게 된다.

이렇듯 if문의 순서도 굉장히 중요하다.

---

## Switch문 실습 예제  

### 1번 문제  
1. 1월~12월 사이의 수를 사용자에게 입력받는다.
2. 3~5월달은 봄, 6~8월달은 여름, 9~11월달은 가을, 12~2월달은 겨울 이라고 출력하는 코드를 switch case문을 통해 프로그래밍 해보자.

``` HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        let season = parseInt(prompt('1~12까지의 숫자를 입력해주세요.'));

        switch(season) {
            case 3:
            case 4:
            case 5:
                document.write(season+'월은 봄 입니다.');
                break;
            case 6:
            case 7:
            case 8:
                document.write(season+'월은 여름입니다.');
                break;
            case 9:
            case 10:
            case 11:
                document.write(season+'월은 가을입니다.');
                break;
            case 12:
            case 1:
            case 2:
                document.write(season+'월은 겨울입니다.');
                break;
            default:
                document.write('1~12까지의 숫자만 입력해주세요.');
                break;
        }
    </script>
</body>
</html>
```
switch case문에서는 break구문이 되게 중요하다.

위 예제에서 보면 case3에서부터 4까지는 break 구문이 없다.

break구문을 빼면 3부터 5까지 쭉 실행 후, 5에서 case문을 빠져나가게 된다.

즉, 사용자가 3과 4와 5중 어느것을 적어도 “봄”이 출력되게 된다.

---

## while문 실습 예제

### 1번 문제  

1. 구구단을 입력받아, 입력받은 구구단을 출력해보자.

``` HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        let number = parseInt(prompt("구구단의 단수를 입력해주세요."));
        let i = 1;
        document.write("<h1>"+number+ "단</h1>");
        while(i<=9) {
                //document.write(number + ' x ' + i + ' = ' + number * i + '<br>');
                document.write(`${number} x ${i} = ${number*i}<br>`); //백틱 - ES6에서 생긴 문법 (+와 , 없이 바로 문자열 사용 가능, 변수 출력은 ${} 형식으로 출력한다.)
                i++;
        }
        
    </script>
</body>
</html>
```
위 예제는 while문의 기초 예제이다.

변수 i를 1로 초기화 시킨다음 while문을 돌려준다. 이때 조건이 들어간다.

‘i가 9보다 작거나 같을때.’ 라는 조건이 들어가게 되고, 실제로 i가 9보다 작으면 이 while문 내부의 코드는 계속해서 돌아가게 된다.

i의 값이 변화하지 않는다면 계속해서 while문이 돌아가기 때문에 i값을 변화를 주어야 한다.

while문 안에서 동작할 코드를 적어준다음 꼭 while문 안에 i의 변화값인 i++를 적어주도록 하는게 규칙이다.

### 2번 문제

1. 100까지의 수 중에서 3의 배수이면서, 4의 배수인 수를 출력해보자.
``` JavaScript
var number = 100;
var i = 1;
while(i <= number) {
    if(i % 3 == 0 && i % 4 == 0) {
        console.log(`3의 배수이면서 4의 배수인 수 : ${i}`);
    }
    i++
}
```
이 문제는 while문 기초를 배울 때, 가장 많이 해보는 실습 예제이다.

i를 1로 초기화 해주고 100보다 작거나 같을때 반복을 해준다.

그리고 문제의 조건처럼 i값이 3의 배수이고, 4의 배수인 수를 출력하려면 i를 3으로 나눈값의 나머지가 0이면 TRUE이고, i를 4로 나눈값의 나머지가 0이면 TRUE이다.

이것을 &&기호로 붙여주면 프로그래밍 언어에서는 AND 표시이다.

즉, 둘 다 TRUE여야만 동작하는 코드이다.

### 3번 문제

1. 숫자 524의 약수의 개수를 구하시오.
``` JavaScript
var number = 524
var i = 1;
var result = 0; //개수를 누적할 변수
while(i <= number) {
    if(number % i === 0) {
        result++; //개수 세기. result += 1;도 무방하다.
    }
    i++;
}
console.log(`${result}개`);
```
524의 약수를 구하는 방법은 524에서 수를 하나씩 나눠보고 그 나눈값의 나머지가 0이면 약수인 것이다.

만약 0이 아니라면 그 수는 약수가 아니다.

그래서 위처럼 코드를 짜보았고, 6개라고 정상적으로 출력이 된다.

### 4번 문제

1. 100까지의 수 중에서 9의 배수의 합계를 구하시오.
``` JavaScript
var i = 1;
var number = 100;
var sum = 0;
while(i<=number) {
    if(i % 9 === 0) {
        sum += i;
    }    
    i++;
}
console.log(sum);
```
우선 1부터 100까지 반복을 하고, 그 중에서 9의 배수를 찾아야 한다.

반복을 돌고있는 i를 9로 나눈값의 나머지가 0이라면 그 수는 9의 배수인 것이다.

그리고 sum 이라는 변수를 하나 만들어주고 0으로 초기화 해준다.

그런 다음 sum에다가 i를 중첩으로 계속해서 더해준다.

sum = sum + i 는 sum과 i를 더해서 sum 변수에 넣으라는 얘기이다.

처음 sum을 초기화 해준게 0이고, i값이 1부터 시작했기 때문에, 0 + 1을 sum 변수에 넣어주면 sum은 1로 변하게 된다. 하지만 1에서 9를 나누면 나머지가 0이 되지 않기 때문에 i의 값이 9가 될 때 까지 sum은 0 그대로 있다. i의 값이 9가 되면 0 + 9를  하게 되고 그 수를 sum 변수에 담는다.

그러면 sum은 9가 됐을 것이고, 이 동작을 100번 돌게 된다.

다음 i의 값이 18이 되는 순간 sum = sum + i 구문이 동작하게 될 것이고, 9 + 18을 sum 변수에 또 넣어주게 된다. sum은 27이 되었다.

이런식으로 반복하여 모두 더하면 594가 나온다.

---

## for문 실습 예제

### 1번 문제  
1. 구구단 5단을 for문으로 출력해보자.

``` JavaScript
for(let i = 1; i<=9; i++) {
    console.log(`5 x ${i} = ${5*i}`);
}
```
for문의 가장 기초 실습 예제이다.

for문의 사용법은 for(초기값; 조건; 증감식) 순으로 쓰면 된다.

이제 for문을 보면 i가 1이고 9보다 작거나 같을때 i를 1씩 증가 시킨다.

그리고 i를 출력하면 1 ~ 9까지 출력이 된다.

이걸 응용하여 구구단의 5단을 출력했다.

### 2번 문제

1. 7~100 까지의 정수중에서 7의 배수를 출력해보자.

``` JavaScript
for(let i=7; i<=100; i++) {
    if(i % 7 === 0) {
        console.log(`7부터 100까지 정수중에서 7의 배수는 ${i} 입니다.`);
    }
} 
```

위에 while 실습 예제에서 했던것과 같이 i를 7로 나눈 값의 나머지가 0이라면 출력만 하면 된다.

문제에서는 7부터 100까지라고 지정을 해주었으니, i의 초기값을 7로 지정해주고 100보다 작거나 같을때 i를 1씩 증가시키는 형태로 만들어 보았다.

### 3번 문제

1. 1 ~ 50 까지의 홀수의 합을 구해보자.

``` JavaScript
let sum = 0;
for(let i=1; i<=50; i++) {
    if(i % 2 !== 0) {
        sum += i;
    }
}
console.log(`1부터 50까지의 홀수의 합은 ${sum} 입니다.`);
```

홀수 구하는 방법은 짝수 구하는 방법의 반대로 생각하면 된다.

우선 문제에서 1 부터 50까지 라고 지정을 해주었으니, for문을 작성하기 쉽고, 이 다음 if문에 들어갈 것을 생각하면 된다.

i를 2로 나누었을때의 나머지가 0이 아니라면 i값은 홀수인 것이다.

그 값을 sum 변수를 만들어 sum 변수에 중첩으로 더해준다. (while문 실습 예제 4번 문제와 같다)

### 4번 문제

1. 100의 약수의 합을 구해보자.

``` JavaScript
let result = 0;
for(let i = 1; i<=100; i++) {
    if(100 % i === 0) {
        result += i;
    }
}
console.log(`100의 약수의 합은 ${result} 입니다.`);
```

100의 약수의 합을 구하는 방법은 간단하다.

우선 100바퀴의 반복을 돌릴거고 그 내부에 if문으로 조건을 걸어준다.

만약 100에서 i를 나누었을때 나온 나머지값이 0이라면 result 라는 변수에 중첩으로 더해주는 코드로 작성해보았다.