# React 2024 Project

- JS 기반의 React 도구를 사용한 Front-End Project

## React project 생성하기

- 현재 18.x 버전에서 프로젝트 생성하기
- 온라인상에서 직접 도구를 실행하여 생성하기
- `create-app-template`를 사용하여 프로젝트 구조를 생성하기

```bash
npx create-react-app [project]
```

- `blank template`를 사용하여 프로젝트 구조를 생성하기

```bash
npx create-react-app [project] --template empty
```

- 17.x 이전 버전에서는 프로젝트 생성하기
- 도구(create-react-app)를 다운로드 받아 설치한 후 실행

```bash
npm install -g create-react-app
create-react-app [project]
```

## 추가 dependency 도구 설치하기

- react, nodejs, javascript 에서 표준으로 제공하는 도구외에 별도로 필요한 도구가 있을 경우 `npmjs.com` 에서 검색하여 프로젝트에 추가하여 설치 할 수 있다
- 도구를 프로젝트에 설치하는 방법
- 다음 명령을 실행하면 `npmjs.com` 에서 자동으로 다운로드하여 프로젝트에 설치해 준다

```bash
npm install [도구이름]
npm i [도구이름]
```

## 소스코드에서 `Parsing error...` 오류 발생할 경우

- 프로젝트의 `.eslintrc.json` 파일 내용을 다음과 같이 수정하고, work 폴더에 해당 파일 복사하여 붙여넣기

```json
{
  "extends": ["next/babel", "next/core-web-vitals"]
}
```

- 그래도 오류가 계속되는 경우 work 폴더에 `.babelrc` 파일을 만들고 다음 코드를 복사 붙여 넣기

```json
{
  "presets": ["next/babel"],
  "plugins": []
}
```
