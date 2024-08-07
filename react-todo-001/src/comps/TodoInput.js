import "../css/TodoInput.css";
import { useState } from "react";
import { getTodo } from "../modules/TodoUtils";

/**
 * TODO input box 에 할일을 입력하고,
 * 추가 버튼을 클릭하면 todoList 배열에 추가하여
 * 추가된 리스트가 보이도록
 */
const TodoInput = ({ todoList, setTodoList }) => {
  const [todo, setTodo] = useState("");

  const onClickHandler = () => {
    const todoJSON = getTodo(todo);
    /**
     * 기존의 todoList 배열을 펼처서(Spread) 깊은 복사본을 만들고
     * 생성된 복사본 끝에 todoJSON 의 데이터를 추가하여 배열로 생성
     * 그리고, 그 생성된 배열을 기존의 todoList 와 교체
     * setTodoList()  는 기존의 todoList 배열을 새로운 배열로
     * 교체하는 역할을 수행한다
     */
    setTodoList([...todoList, todoJSON]);
  };

  return (
    <div className="todoInput">
      <input placeholder="TODO" onChange={(e) => setTodo(e.target.value)} />
      <button onClick={onClickHandler}>추가</button>
    </div>
  );
};
export default TodoInput;
