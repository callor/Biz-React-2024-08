"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

const MainNav = () => {
  // useSession() 함수가 return data 변수를 session 이라는 이름으로 사용하겠다
  // 만약 login 된 정보가 있으면 data 에 값이 담겨있다
  const { data: session } = useSession();

  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        {session?.user ? (
          <Link href="#" onClick={() => signOut()}>
            로그아웃({session?.user.email})
          </Link>
        ) : (
          <Link href="/api/auth/signin">로그인</Link>
        )}
      </li>
    </ul>
  );
};
export default MainNav;
