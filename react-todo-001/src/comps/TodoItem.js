const TodoItem = ({ todo, todoList, setTodoList }) => {
  const onCompleteClickHandler = (id) => {
    const result = todoList.map((item) => {
      if (item.id === id) {
        return { ...item, complete: !item.complete };
      }
      return item;
    });
    setTodoList([...result]);
  };

  return (
    <li className="todoItem">
      <div className="date">
        <div>{todo.sdate}</div>
        <div>{todo.stime}</div>
      </div>
      <span className={todo.complete ? "content complete" : "content"}>{todo.content}</span>
      <div className="complete" onClick={() => onCompleteClickHandler(todo.id)}>
        &#x2713;
      </div>
    </li>
  );
};

export default TodoItem;
