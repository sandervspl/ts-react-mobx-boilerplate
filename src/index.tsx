// Add polyfills before anything else
if (!global._babelPolyfill) {
  require('@babel/polyfill');
}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './app/components/Root';
import './manifest.json';

// Register service worker
if (!__DEV__) {
  // Check that service workers are registered
  if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js');
    });
  }
}

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  );
};

render(Root);

if (__DEV__ && module.hot) {
  module.hot.accept('./app/components/Root', () => {
    render(require('./app/components/Root'));
  });
}
