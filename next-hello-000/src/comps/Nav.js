import Link from "next/link";

const Nav = () => {
  return (
    <nav className="main">
      <div>
        <Link href="/">Home</Link>
      </div>
      <div>
        <Link href="/student">학생정보</Link>
      </div>
      <div>
        <Link href="/bbs/free">자유게시판</Link>
      </div>
      <div>
        <Link href="/user/login">로그인</Link>
      </div>
      <div>
        <Link href="/user/join">회원가입</Link>
      </div>
    </nav>
  );
};

export default Nav;
