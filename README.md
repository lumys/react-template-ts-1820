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
