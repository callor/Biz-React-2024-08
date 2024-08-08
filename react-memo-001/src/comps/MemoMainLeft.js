import css from "../css/MemoMainLeft.module.css";
const MemoMainLeft = () => {
  return (
    <div className={css.main}>
      <div className={css.date}>
        <input type="date" />
        <input type="time" />
        <input type="button" value="새로작성" />
      </div>
      <input type="text" placeholder="메모 제목" />
      <input type="text" placeholder="메모를 입력하세요" />
      <input type="button" value="추가" />
    </div>
  );
};
export default MemoMainLeft;
