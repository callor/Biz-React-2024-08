import "../css/TodoMain.css";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { useState } from "react";
// TodoUtils.js 에 선언된 getTodo() 함수를 import 하여 사용하겠다
import { getTodo } from "../modules/TodoUtils";

const TodoMain = () => {
  const [todoList, setTodoList] = useState([
    getTodo("체육관가기"),
    getTodo("청구서정리"),
    getTodo("길동이 만나기"),
    getTodo("계란구입하기"),
    getTodo("HTML 익히기"),
  ]);
  console.log(todoList);
  return (
    <section className="todoMain">
      <header className="todoHeader">
        <h1>오늘 해야 할 일</h1>
      </header>
      <TodoInput todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </section>
  );
};
export default TodoMain;
