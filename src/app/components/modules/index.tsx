import * as React from 'react';
import * as Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

export const Test = Loadable({
  loader: () => import('./Test'),
  loading: Loading,
});
