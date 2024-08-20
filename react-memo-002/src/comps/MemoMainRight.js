import css from "../css/MemoMainRight.module.css";
const MemoMainRight = ({ memoList }) => {
  const viewMemos = memoList.map((memo) => <li>{memo.subject}</li>);
  return <ul className={css.main}>{viewMemos}</ul>;
};

export default MemoMainRight;
