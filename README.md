# Create React App(CRA) 기반으로 생성한 프로젝트

`CRA` 의 `typescript` `template` 를 통해 생성한 프로젝트이며, `craco(Create-React App Configuration Override)`를 통해 커스텀 설정하였습니다.


## Custom Configuration

현재 진행한 커스텀 설정은 아래와 같습니다.

### Craco
- 절대 경로(Absolute Path) 지원.
- tsconfig 옵션 구성
- ...

### Prettier & ESLint
- airbnb 베이스
- `prettier` 와 `ESLint` 연동 구성
- 절대 경로 지원 구성.
- ...

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 프로젝트 디자인 패턴
참고 (아토믹 디자인 패턴)
- [카카오 개발자](https://fe-developers.kakaoent.com/2022/220505-how-page-part-use-atomic-design-system)
- [배민](https://zoomkoding.github.io/%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4/%EC%9A%B0%EC%95%84%ED%95%9C%ED%85%8C%ED%81%AC%EC%BA%A0%ED%94%84/2020/07/09/atomic-design-pattern.html)
- [투두리스트](https://velog.io/@thsoon/%EC%93%B8%EB%95%8C%EC%97%86%EC%9D%B4-%EA%B3%A0%ED%80%84%EC%9D%B8-%ED%88%AC%EB%91%90%EB%A6%AC%EC%8A%A4%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0-FE-2.-%EB%B7%B0-%EC%84%A4%EA%B3%84#templates--page-%EA%B5%AC%EC%84%B1)

아토믹 디자인 패턴을 모두 따르기에는 제약도 많고 모든 경우에 들어 맞는 것도 아닐 겁니다. 그래서 장점이 될만한 부분만 따라 구조를 잡으려고 참고 했습니다.

기본적으로 모든 컴포넌트를 디자인해서 구성하기에는 손도 많이 갈 것이고,
관리도 힘드므로 일정 템플레이트 라이브러리를 활용해서 atom 컴포넌트 생성은 최소화하는 방향으로 생각합니다.

- `components`
  - `atoms`(원자) : 기본적인 최소 크기 컴포넌트 단위, 라이브러리에서 제공하는 컴포넌트 외에 추가적으로 발생한 컴포넌트들(특수한 형태 버튼, 로고 등)
  - `molecules`(분자) : atoms 컴포넌트 몇개를 조합한 1개 목적 컴포넌트 단위, 라이브러리에서 제공하는 컴포넌트의 커스텀이나, 추가 발생 컴포넌트들(라벨, 메시지 등이 포함된 input 컴포넌트 등)
  - `organisms`(유기체) : atoms 컴포넌트나 molecules 컴포넌트 들을 조합하여 생성한 컴포넌트 단위, 회원 가입 폼 등이 해당 됨
- `templates` : 컴포넌트들을 배치하여 1개 페이지의 구조를 잡는 단위, 실제 기능은 포함되지 않고, 레이아웃을 정의.
- `page` : api 통신 요청 등이 담김. 요청을 통한 데이터(상태) 등을 `Redux` 나 `Recoil` 과 같은 글로벌 상태 관리 등에 적재 처리하고, 하위 컴포넌트들에 주입 등을 처리.

`page`에서 모든 처리를 하면 상태 주입이 번거로울 수 있으므로 상황에 따라 하위 컴포넌트에서 어느 정도는 할 수 있도록 생각.


## Available Scripts

In the project directory, you can run:

### `npm start` or `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test` or `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build` or `yarn run build`

실제 서비스하기 위한 배포 과정을 진행합니다.

`build` 폴더에 생성되며 해당 폴더를 실제 운용할 서버에 배포합니다.

그리고 `build` 폴더의 부모 디렉토리 위치에서 `npx serve -s build` or `serve -s build` 명렁어를 통해 node 서버를 통해 구동합니다.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
