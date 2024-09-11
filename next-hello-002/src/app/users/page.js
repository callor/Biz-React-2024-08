/**
 * React 기반의 nextJS 프로젝트에서 주의할 점
 *
 * React의 컴포넌트(JS 함수)는 기본이 client 환경이다
 * client 환경에서는 use**(useState, useEffect, useCallback 등 hook 함수)를
 * 사용하여 프로젝트를 진행한다.
 * 외부로 부터 데이터를 가져오거나 할때 hook 함수를 통하여 가져온다
 * 또한 기본 컴포넌트함수는 절대 async await 를 붙이면 안된다.
 *
 * NextJS 의 컴포넌트(JS 함수)는 기본이 server 환경이다
 * server 환경에서는 use Hook 함수를 사용할수 없다.
 * 외부로 부터 데이터를 가져오거나 할때 hook 함수를 통하지 않고
 * 직접 가져올수 있다.
 *
 * 또한 기본 컴포넌트 함수에 async await 를 붙일수 있다.
 *
 * 만약 NextJS 의 컴포넌트에서 use Hook 함수를 사용하려면
 * 코드의 상단에 "use client" 라는 커멘트를 붙여줘야 한다
 *
 */

import { userSelectAll } from "@/app/api/user";
const UserPage = async () => {
  const users = await userSelectAll();
  const userList = users.map((user) => <li>{user.username}</li>);
  return <ul>{userList}</ul>;
};
export default UserPage;
