import Input from "./Input";
import List from "./List";
import { useState } from "react";

const Main = () => {
  // 배열을 state 변수로 선언하기
  // names 라는 state 배열과, setNames 라는 setter 함수를 선언하기
  const [names, setNames] = useState(["홍길동", "이몽룡", "성춘향", "임꺽정", "장녹수"]);

  return (
    <>
      <Input names={names} setNames={setNames} />
      <List names={names} />
    </>
  );
};
export default Main;
