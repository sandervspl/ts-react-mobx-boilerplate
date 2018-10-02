# React boilerplate

## Getting Started
```
$ git clone https://github.com/sandervspl/ts-react-mobx.git
```

```
$ cd ts-react-mobx && npm i
```

```
$ npm run dev
```

## Features
* [Universal](https://medium.com/@mjackson/universal-javascript-4761051b7ae9) rendering
* [React 16.3](https://github.com/facebook/react)
* [MobX](https://github.com/mobxjs/mobx)
* [React Router 4](https://github.com/rackt/react-router)
* [Express](http://expressjs.com)
* [Babel 7](http://babeljs.io) for the future of JavaScript
* [Webpack 4](http://webpack.github.io) for bundling
* [Webpack Dev Middleware](http://webpack.github.io/docs/webpack-dev-middleware.html)
* [Webpack Hot Middleware](https://github.com/glenjamin/webpack-hot-middleware)
* [TSLint](https://palantir.github.io/tslint/) to maintain a consistent code style
* [Styled-Components](https://github.com/styled-components/styled-components/) for CSS-in-JS
* [TypeScript](https://github.com/Microsoft/TypeScript) for better documentation of the written code
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

### Ducks
This boilerplate uses the MobX for its state management.

## Styling
### Local styles
This project uses CSS-in-JS styling with [Styled-Components](https://github.com/styled-components/styled-components/).

### Global styles
You can configure the styled-components theme in the `styles` folder. In this folder you can also specify all the variables. When styling a components, grab the `theme` from the styled-component's props.

Example:
```
const Button = styled.button`
    background-color: ${props => props.theme.color.white};
`
```

## Bash scripts
For the best development experience, I recommend adding the following scripts to your `.bashrc` file.

### Create new common component
```bash
newcommon() {
    FILE="$1.ts";
    P="src/app/components/common/$FILE";
    touch $P;
    printf "import styled from 'styled-components'\n\n" >> $P;
}
```
Usage:
```
$ newcommon Button
```
This will create a new file in `app/components/common` with `import styled from 'styled-components` pre-written.

### Create a new module component
```bash
newmodule() {
    M="src/app/components/modules/$1";
    mkdir -p $M || return;
    mkdir -p "$M/components" || return;
    touch "$M/index.tsx" "$M/styled.ts" "$M/types.ts";
    printf "import styled from 'styled-components';\n\n" >> "$M/styled.ts";
}
```
Usage:
```
$ newmodule Homepage
```
This will create a new folder in `app/components/modules` with an `index.tsx`, `styled.ts` and `types.ts` file.
