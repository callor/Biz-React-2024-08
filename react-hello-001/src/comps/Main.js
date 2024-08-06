import Input from "./Input";
import List from "./List";
import { useState } from "react";

const Main = () => {
  const names = ["홍길동", "이몽룡", "성춘향", "임꺽정", "장녹수"];

  return (
    <>
      <Input />
      <List />
    </>
  );
};
export default Main;
