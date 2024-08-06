# React 에서 변수 선언하기

- JS 에서는 변수를 선언할때 `const`, `let`, `var` 의 키워드를 사용하여 생성한다.
- React 에서는 보통 `const`로 변수를 선언하는 것을 습관화 하는 것이 좋다
- `React에서 변수는 Read Only` 라고 생각하자

## 일반적인 변수는 const 키워드로 선언한다

- 일반적인 변수는 코드에서 개발자가 관리하는 데이터 이사

```js
const name = "홍길동";
const age = 30;
```

## React 에서 `state(상태)` 변수

- 상태(변수의 내용이)가 변화되는가를 React 가 감시하고 있다가, 상태의 변화가 감지되면, 화면에 변수가 표현된 곳을 `ReRendering`을 하는 변수
- 상태변수는 react 에서 제공하는 `useState()` 라는 함수를 사용하여 선언한다.

```js
import { useState } from "react";
const [변수, setter] = useState(초기값);
```

### React 상태변화와 reRendering

- react 의 상태변수를 사용하면, 변수의 변화되는 것이 React 에 의해서 감지되고, 변수의 값이 변경되면 화면에 즉시 반영이 된다.

## React 에서 각 모듈(컴포넌트)에 변수 전달하기

- 부모 컴포넌트(변수를 전달하는 곳), 자식 컴포넌트(변수를 전달 받는 곳)로 구분하여 살펴봐야 한다.
- 부모 컴포넌트에서 자식 컴포넌트로 변수를 전달할때는 tag 에 속성을 부여하는 것처럼 사용한다
- 아래 코드는 List 라는 컴포넌트에 `namesValue` 변수를 전달할때 `namesProps`라는 이름으로 전달한다.

```js
<List namesProps={namesValue}>
```

- 자식 컴포넌트는 컴포넌트 함수의 매개변수 형식으로 변수를 받는다
- 이때 변수는 반드시 {} 로 묶음 처리를 한다. : 구조분해 방식으로 받기

```js
const List = ({ names }) => {};
```

### JS 배열의 복사

```js
const arr = [1, 2, 3, 4, 5, 6, 7];
const arr1 = arr;

const arr2 = [];
for (let i = 0; i < arr.length; i++) {
  arr2.push(arr[i]);
}

// 배열의 구조분해 깊은 복사
const arr3 = [...arr]; // 1
arr.forEach((ar) => arr3.push[ar]); // 2
const arr4 = arr.map((ar) => ar); // 3

// arr 배열을 arr5 로 깊은 복사를 한 후 끝에 정수 10을 추가하라
const arr5 = [...arr, 10];
```
