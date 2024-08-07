import "../css/TodoList.css";
import TodoItem from "./TodoItem";
const TodoList = ({ todoList, setTodoList }) => {
  const listView = todoList.map((todo) => (
    <TodoItem todo={todo} todoList={todoList} setTodoList={setTodoList} />
  ));
  return <ul className="todoList">{listView}</ul>;
};
export default TodoList;
