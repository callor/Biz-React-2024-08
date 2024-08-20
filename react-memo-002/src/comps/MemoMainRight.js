import css from "../css/MemoMainRight.module.css";
const MemoMainRight = ({ memoList, onCompleteMemo, onDeleteMemo }) => {
  const onDeleteHandler = (id) => {
    if (window.confirm("메모를 삭제할까요?")) {
      onDeleteMemo(id);
    }
  };
  const viewMemos = memoList.map((memo) => {
    return (
      <li>
        <div className={css.date_time}>
          <span>{memo.date}</span>
          <span>{memo.time}</span>
        </div>
        <span
          className={memo.complete ? `${css.content} ${css.complete}` : `${css.content}`}
          onClick={() => onCompleteMemo(memo.id)}
        >
          {memo.subject}
        </span>
        <div className={css.delete} onClick={() => onDeleteHandler(memo.id)}>
          &times;
        </div>
      </li>
    );
  });

  return <ul className={css.main}>{viewMemos}</ul>;
};

export default MemoMainRight;
