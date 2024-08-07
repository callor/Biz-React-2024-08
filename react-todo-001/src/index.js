import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./css/index.css";

/**
 * public/index.html 파일의 <div id="root"></div> tag 를 시작으로
 * 화면을 rendering(그리기)을 시작하라
 */
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
