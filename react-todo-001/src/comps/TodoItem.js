const TodoItem = ({ todo, todoList, setTodoList }) => {
  const onCompleteClickHandler = (id) => {
    const result = todoList.map((item) => {
      // 클릭된 요소의 id 와 같은 항목이 있으면
      // complete 값을 반전시켜(NOT) complete 를 true, false 가 반복되도록한다
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
