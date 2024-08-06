/**
 *
 * @param
 *  Main 컴포넌트에서 전달한 names 라는 이름의 변수(배열)를
 *  List 컴포넌트에서 사용하기 위하여 받는 방법
 *
 * @returns
 */
const List = ({ names }) => {
  // const names = ["홍길동", "이몽룡", "성춘향", "임꺽정", "장녹수"];
  const lists = names.map((name) => <li>{name}</li>);
  return (
    <div>
      <h3>나는 리스트 입니다</h3>
      <ul>{lists}</ul>
    </div>
  );
};
export default List;
