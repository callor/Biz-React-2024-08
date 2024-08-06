// react 에서 css 파일을 import 기본문법
import Main from "./comps/Main";
import "./css/App.css";
/**
 * React 의 컴포넌트는 함수로 시작한다
 * 함수 몸체는 반드시 return 을 갖는다
 * 함수 몸체는 tag 컴포넌트로 화면을 그리며
 * html 문법과 매우 유사하다
 */
const App = () => {
  return (
    <>
      <header class="main">
        <h1>나의 첫 React 프로젝트</h1>
      </header>
      <section className="App">
        <Main />
      </section>
    </>
  );
};
// React 컴포넌트는 반드시 함수 자체를 export 해야 한다
export default App;
