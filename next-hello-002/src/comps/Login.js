"use client";
import { signIn } from "next-auth/react";
const LoginComps = () => {
  return (
    <>
      <div onClick={() => signIn("github")}>github 로그인</div>
      <div onClick={() => signIn("google")}>Google 로그인</div>
    </>
  );
};

export default LoginComps;
