<div id="top"></div>
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/dung07t2/tictactoe-test.git">
  </a>

<h3 align="center">Tic Tac Toe</h3>

  <p align="center">
    Tic Tac Toe Game
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

This is a straightforward Tic Tac Toe game.
The game is build using NextJs on top of React with Typescript.
Then there's redux, redux-thunk, and material-UI.

### Build With

-   [React](https://reactjs.org/)
-   [NextJs](https://nextjs.org/docs/basic-features/typescript)
-   [Typescript](https://www.typescriptlang.org/)
-   [Redux](https://redux.js.org/)
-   [Redux-thunk](https://github.com/reduxjs/redux-thunk)
-   [Material-UI](https://mui.com/)

<!-- GETTING STARTED -->

## Getting Started

The project are mainly categorize into three parts (UI, redux logic and typescript interface):

```
pages
|-- index.tsx
|-- _app.tsx
|-- Board.tsx
|-- Game.tsx
|-- Square.tsx
redux
|-- reducers
|-- actions
|-- thunks
|-- types
      |-- interfaces
|-- reducers.ts
|-- store.ts
```

-   All UI components are kept in the `pages` folder..
-   All redux logic are kept inside `redux` folder.
-   All typescript interfaces are kept inside `types` and `types/interfaces` folder.

### Features:

-   Check the winner
-   Persit previous steps even refresh page.
-   Store all steps
-   Testing with testing-library and jest
-   Husky for checking pre-commit
-   Circle Ci setup

### Prerequisites

-   Node - 16.13.0
-   Yarn - 1.22.18

### Installation

1. git clone https://github.com/dung07t2/tictactoe-test.git
2. cd tictactoe
3. yarn dev
4. navigate to localhost:3005 and start your development

### Deploy aws Ec2:

-   CircleCI
-   Ubuntu 22.04/nginx/Encrypt SSL/TLS Certificates
-   Link: [Tictactoe](https://assignment.ray02r.com/)
