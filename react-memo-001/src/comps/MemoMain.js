// MemoMain.module.css 파일을 css 라는 이름으로 import
import css from "../css/MemoMain.module.css";
import MemoMainLeft from "./MemoMainLeft";

const MemoMain = () => {
  return (
    <section className={css.main}>
      <article className={css.aside}>
        <MemoMainLeft />
      </article>
      <article className={css.aside}>
        <h1>RIGHT</h1>
      </article>
    </section>
  );
};
export default MemoMain;
