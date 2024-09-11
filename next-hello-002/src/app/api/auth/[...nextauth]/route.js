import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  pages: {
    signIn: "/users/login",
    signOut: "/users/logout",
  },
  providers: [
    CredentialsProvider({
      id: "Credentials",
      name: "Credentials",
      credentials: {
        username: { label: "이메일", type: "email" },
        password: { label: "비밀번호", type: "password" },
      },
      async authorize(loginUser) {
        const { username, password } = loginUser;
        console.log("USERNAME", username, password);
        const user = { id: 1, email: "callor@callor.com", name: "홍길동", password: "12345" };
        if (username === user.email && password === user.password) {
          return { ...user, password: undefined };
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
  session: {
    maxAge: 60 * 60,
  },
});

export { handler as GET, handler as POST };
