# CSS 의 충돌

- 컴포넌트, 모듈을 분리하여 협업을 할경우 같은 이름의 class 속성을 사용하므로써 다른 모듈에 css 가 잘못 적용되는 경우가 많다
- 협업을 할때는 각 팀원이 자신의 모듈에서 사용하는 css 의 class 이름에 대한 사전 협의를 하여야 한다. 그렇지 않으면 통합 테스트를 할때 css 의 class 충돌로 인하여 화면 Layout 이 엉망이 되는 경우가 많다

## React 의 module.css 기술

- css 파일을 `*.module.css` 라는 이름으로 작성을 한다.
- 다음과 같이 `jsx` 컴포넌트에서 import 할때 이름이 있는 css 를 작성한다

```js
import css from "Main.module.css";
```

- 사용할때는 다음과 같이 className 을 작성한다

```js
<div className={css.main}></div>
```

- 프로젝트가 시작된 후 html 소스 보기를 하면 class 이름이 UNIQ 한 이름으로 자동 변환되어 각 tag 에 부착되는 것을 볼 수 있다.
- 이 방식을 사용하면 협업 프로젝트에서 css 충돌로 인한 layout 흐트러짐 문제를 방지할 수 있다
