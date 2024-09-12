"use client";
import { signIn } from "next-auth/react";
import { useCallback, useState } from "react";
const LoginComps = () => {
  const [users, setUsers] = useState([]);
  const userRequest = useCallback(() => {
    (async () => {
      const res = await fetch("/api/users");
      const users = await res.json();
      setUsers([...users]);
    })();
  }, []);

  const btnStyle = {
    display: "block",
    width: "500px",
    margin: "0 auto",
    padding: "5px",
    borderRadius: "5px",
    cursor: "pointer",
    border: "1px solid green",
    textAlign: "center",
  };

  const usersList = users.map((user) => <li>{user.username}</li>);

  return (
    <>
      <div style={btnStyle} onClick={() => signIn("github")}>
        github 로그인
      </div>
      <div style={btnStyle} onClick={() => signIn("google")}>
        Google 로그인
      </div>
      <div style={btnStyle} onClick={userRequest}>
        User 데이터 요청 테스트
      </div>
      <ul>{usersList}</ul>
    </>
  );
};

export default LoginComps;
