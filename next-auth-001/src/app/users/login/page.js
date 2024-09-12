"use client";

import { signIn } from "next-auth/react";
import { useCallback, useState } from "react";

const LoginPage = () => {
  const [user, setUser] = useState({});

  const onLoginHandler = useCallback(async () => {
    console.log("USER", user);
    await signIn("Credentials", {
      username: user.username,
      password: user.password,
      redirect: true,
      callbackUrl: "/",
    });
  }, [user]);

  return (
    <form>
      <fieldset>
        <legend>로그인</legend>
        <input
          name="username"
          type="email"
          onChange={(e) => {
            setUser({ ...user, username: e.target.value });
          }}
          placeholder="이메일을 입력하세요"
        />
        <input
          name="password"
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
          type="password"
          placeholder="비밀번호를 입력하세요"
        />
        <input type="button" value="로그인" onClick={onLoginHandler} />
      </fieldset>
      <div>{user.username}</div>
    </form>
  );
};
export default LoginPage;
