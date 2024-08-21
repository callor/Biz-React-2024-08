# Prisma DBMS 프로젝트

- `DBMS ORM(Object-Relational Mapping)`, `객체지향방식으로 DBMS` 핸들링

## `ORM`

- `SQL`을 사용하지 않으면서, 최소한의 `CRUD` 부터 `Relation` 등을 쉽게 프로그래밍 할수 있도록 만들어진 도구
- 복잡한 Table 간의 구조가 형성되어 있을 경우 `SQL` 보다 작성하기가 더 어려울 수도 있다
- `NodeJS` 와 관련된 프로젝트(NodeJS, React, NextJS) 에서는 `Sequelize`, `Prisma` 등 다양한 도구가 많다. 그중에서 `NodeJS + Express` 에서는 `Sequelize` 를 많이 사용하고, `React, NextJS` 에서는 `Prisma` 를 많이 사용한다.

## 프로젝트에 도구와 depedency 설치

- 개발환경에서 사용할 도구 설치
- 기존의 개발도구가 설치된경우(`npm install @prisma/cli --save-dev`) 기존의 도구를 uninstall 한 후 계속진행
- 기존 구형 도구 uninstall : `npm uninstall prisma --save-dev`

- 실행환경에서 사용할 dependency 설치

```bash
npm install @prisma/client
```

- prisma 환경설정(최초 실행)

```bash
npx prisma init --datasource-provider mysql
```

- 위 명령 실행할때 오류가 발생하는 경우 프로젝트 폴더의 `prisma` 폴더와 `.env` 파일을 삭제한 후 명령을 다시 실행한다.

- 프로젝트 폴더에 `prisma` 폴더와 `.env` 파일이 생성되었는지 확인
- DB 접속 URL 변경하기 : `.env` 파일을 열어서 DB 접근 경로 설정하기
- 만약 github 등에서 clone 한 경우 `.env` 파일이 없다. 이때는 프로젝트 폴더에 `.env` 파일을 생성한 후 다음 코드를 추가한다

```text
DATABASE_URL="mysql://username:userpassword@localhost:3306/mydb"
```

- DB Table 정보 import
- `.env` 에 설정된 `mydb` 의 파일 정보를 모두 가져와서 `schema` 파일을 작성한다. : `prisma/schema.prisam` 파일을 참조

```bash
npx prisma db pull
```

- DB 연결을 위한 `schema` 생성하기

```bash
npx prisma generate
```

## 간략하게 정리

```bash
npm install @prisma/client
npx prisma init --datasource-provider mysql
```

- `.env` 파일에 DB 연결 URL 설정

```bash
npx prisma db pull
npx prisma generator
```
