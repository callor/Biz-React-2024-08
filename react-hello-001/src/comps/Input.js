import { useState } from "react";
const Input = () => {
  // const userName = "홍길동";
  const age = 0;
  const [userName, setUserName] = useState("");

  return (
    <>
      <h3>입력화면</h3>
      <input onChange={(e) => setUserName(e.target.value)} placeholder="이름을 입력해 주세요" />
      <p>이름 : {userName}</p>
      <p>이름 : {userName}</p>
      <p>이름 : {userName}</p>
      <p>이름 : {userName}</p>
      <p>이름 : {userName}</p>
      <p>나이 : {age + 30}</p>
    </>
  );
};
export default Input;
