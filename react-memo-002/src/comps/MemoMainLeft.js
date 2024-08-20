import css from "../css/MemoMainLeft.module.css";
import { useState } from "react";
import { getMemoJSON } from "../modues/MemoUtils";

const MemoMainLeft = ({ memoList, setMemoList }) => {
  const [memo, setMemo] = useState({});

  const onNewMemo = () => {
    setMemo(getMemoJSON());
  };

  // const onChangeHandler = (e) => {
  //   const value = e.target.value;
  //   setMemo({ ...memo, subject: value });
  //   console.log("메모", memo);
  // };
  const onChangeHandler = (e) => {
    // e.target 으로 부터 name 속성과 value 속성을 구조분해하기
    const { name, value } = e.target;
    console.log(name, value);
    // react 에서는 state 선언된 변수, 배열, 객체를 절대 직접 변경해서는 안된다
    // memo[name] = value
    // 반드시 미리 생성한 setState 사용하여 변수를 새로 생성해야 한다
    // react는 변경되기 전 값과 변경된 후 값을 비교하여 하면을 rendering 하기 때문에
    setMemo({ ...memo, [name]: value });
  };

  const onAddMemo = () => {
    setMemoList([...memoList, memo]);
  };

  return (
    <div className={css.main}>
      <div className={css.date}>
        <input type="date" value={memo.date} />
        <input type="time" value={memo.time} />
        <input type="button" value="새로작성" onClick={onNewMemo} />
      </div>
      <input type="text" name="subject" placeholder="메모 제목" onChange={onChangeHandler} />
      <input
        type="text"
        name="content"
        placeholder="메모를 입력하세요"
        onChange={onChangeHandler}
      />
      <input type="button" value="추가" onClick={onAddMemo} />
    </div>
  );
};
export default MemoMainLeft;
