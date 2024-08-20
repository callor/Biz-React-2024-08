# Memo Project

- 한 화면에서 메모를 작성하고, 작성한 메모를 즉시 리스트로 보여주는 프로젝트

## 날짜와 UUID 를 사용하기 위하여 dependencies 설정하기

- JS 에서 날짜를 사용하기 위하여는 여러가지 이슈가 있다.
- locale(지역날짜)등 문제가 있는데 이러한 문제를 극복하기 위하여 JS 프로젝트에서는 `moment` 라는 도구를 거의 필수적으로 사용한다
- JS `uuid` 값을 사용하기 위하여 여러가지 도구가 있는데 react 에서는 `react-uuid` 를 많이 사용했다. 하지만 최근에 `uuid` 가 업데이트 되면서 다양한 도구를 사용한다.
- 그중에서 react 사용하는 최신버전 `v7` 의 `uuid`를 사용하기 위하여 `uuidv7`를 사용한다

```bash
npm install moment
npm install uuidv7
```

## github 등으로 부터 clone 한 프로젝트 update

- github 등으로 부터 clone 한 프로젝트는 `node_modules` 폴더가 없는 상태이다. `react` 등 `nodejs` 관련 프로젝트는 `node_modules` 폴더에 관련 `dependecies` 들을 다운로드 받아야 정상적으로 프로젝트가 실행된다. 따라서 clone 한 프로젝트는 반드시 다시 `depdencies` 들을 다운로드 해 주어야 한다
- 다음의 명령을 터미널에서 실행하면 `npmjs.com` 으로 부터 `dependencies` 도구들을 다운로 받아온다
- 단, 이때는 관련 `dependencies` 가 `package.json` 파일에 명시되어 있어야 한다.

```bash
npm install
```
