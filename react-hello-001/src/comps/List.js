const List = () => {
  const names = ["홍길동", "이몽룡", "성춘향", "임꺽정", "장녹수"];
  const lists = names.map((name) => <li>{name}</li>);
  return (
    <div>
      <h3>나는 리스트 입니다</h3>
      <ul>{lists}</ul>
    </div>
  );
};
export default List;
