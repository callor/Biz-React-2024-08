import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const rootDoc = document.querySelector("#root");
const root = ReactDOM.createRoot(rootDoc);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
