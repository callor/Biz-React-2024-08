# NextJS, Next-auth, Prisma, MySQL 을 연동한 회원인증 프로젝트

## 필요한 Dependecies 설치

```bash
npm install next-auth
npm install prisma --save-dev
npm install @prisma/client
```

## prisma MySQL DB 연동을 위한 준비

```bash
npx prisma init --datasource-provider mysql
```

- `.env` 파일 생성 확인
- `.env` 파일에 DB 연결 정보 설정

- `github` 에 프로젝트를 clone 한 경우 `.env` 파일이 생성되지 않는다. 이때는 수동으로 `.env` 파일을 생성하고 다음의 정보를 저장한다.

```
DATABASE_URL="mysql://USER_DB_ID:USER_DB_PASSWORD@localhost:3306/mydb"
```

- `MySQL` DB 에서 `DataBase Schema` 정보 `import`하기

```bash
npx prisma db pull
```

- primsa DB 정보 생성하기, 연동하기

```bash
npx prism generate
```

## Next-Auth 를 이용한 login 구현

```bash
npm install next-auth
```

- `router` 를 이용한 로그인 처리
- `@/app/api/auth/[...auth]/route.js` 에 로그인에 필요한 정보를 설정한다
- `@/provider/AuthProvider.js` 를 만들고 `<SessionProvider></SessionProvider>` 컴포넌트로 Provider 를 생성하고, `<body></body>` 등 인증이 필요한 컴포넌트를 감싸준다.

- 인증이 필요한 컴포너트에서는 `useSession` hook 를 사용하여 로그인한 정보를 참조할 수 있다

## next-auth login 커스터마이징

- `@/app/api[...auth]/route.js 에 pages 정보 설정

```js
  pages: {
    signIn: "/users/login",
    signOut: "/users/logout",
  },
```

- `@/app/users/login/page.js` 파일을 생성하여 로그인 화면 만들기
- `Secret` 정보 설정하기

```bash
npx auth secret
```

- `.env.local` 파일 생성확인
