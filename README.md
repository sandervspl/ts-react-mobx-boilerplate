# React boilerplate

## Getting Started
```
$ git clone https://github.com/sandervspl/ts-react-mobx-boilerplate.git
```

```
$ cd ts-react-mobx-boilerplate && npm i
```

```
$ npm run dev
```

## Features
* [Universal](https://medium.com/@mjackson/universal-javascript-4761051b7ae9) rendering
* [TypeScript 3](https://github.com/Microsoft/TypeScript) for better documentation of the written code
* [Async Type Checking](https://github.com/Realytics/fork-ts-checker-webpack-plugin) on development server for faster compile times
* [React 16.6](https://github.com/facebook/react)
* [MobX](https://github.com/mobxjs/mobx)
* [React Router 4](https://github.com/rackt/react-router)
* [Express](http://expressjs.com) to server a compressed client
* [Babel 7](http://babeljs.io) for the future of JavaScript
* [Webpack 4](http://webpack.github.io) for bundling
* [TSLint](https://palantir.github.io/tslint/) to maintain a consistent code style
* [Styled-Components](https://github.com/styled-components/styled-components/) for CSS-in-JS
* Refer to `package.json` for more details

## NPM Scripts
* Start develop server: `$ npm run dev`
* Build client: `$ npm run build`
* Remove build folder: `$ npm run clean`

**Automated for production with [npm-run-all](https://github.com/mysticatea/npm-run-all).**

## Deployment
Make sure all modules are installed:
```
$ npm i
```

Create a build for production, this will add a `/dist` folder to the root with all bundles.
```
$ npm run build
```

## Development Workflow
### Components
The components are separated in `Modules` and `Common`. Modules are bundled components which depend on each other. Common components are components that are self-contained and can be used through the entire app.

### TypeScript
This boilerplate uses TypeScript for more consistent and better code maintainability. TypeScript is a typed superset of JavaScript, which means variables can be assigned with data types. TypeScript will decrease bugs and improve documentation of the code.

All type checking on development is done on a separate process to speed up the compile time.

### State management
This boilerplate uses the MobX for its state management.

## Styling
### Local styles
This project uses CSS-in-JS styling with [Styled-Components](https://github.com/styled-components/styled-components/). In order to use Typescript with Styled-Components, this boilerplate uses an augmented version of Styled-Components, which adds the Theme types to the ThemeProvider. To use this version, you have to import from `'@styled-components'` instead of the usual `'styled-components'` path.

### Global styles
You can configure the styled-components theme in the `styles` folder. In this folder you can also specify all the variables. When styling a components, grab the `theme` from the styled-component's props.

Example:
```
import styled from '@styled-components';

const Button = styled.button`
    background-color: ${props => props.theme.color.white};
`
```
