// MemoMain.module.css 파일을 css 라는 이름으로 import
import css from "../css/MemoMain.module.css";
import MemoMainLeft from "./MemoMainLeft";
import MemoMainRight from "./MemoMainRight";
import { useState } from "react";
import { getSampleMemos } from "../modues/MemoUtils";

const MemoMain = () => {
  const [memoList, setMemoList] = useState([]); // ...getSampleMemos()]);
  return (
    <>
      <h1 className={css.header}>오늘은 내 생애의 가장 젊은날</h1>
      <section className={css.main}>
        <article className={css.aside}>
          <MemoMainLeft memoList={memoList} setMemoList={setMemoList} />
        </article>
        <article className={css.aside}>
          <MemoMainRight memoList={memoList} />
        </article>
      </section>
      <footer className={css.footer}>
        <address>CopyRight &copy; callor@callor.com</address>
      </footer>
    </>
  );
};
export default MemoMain;
