import * as React from 'react';
import * as Loadable from 'react-loadable';
import { LoadableComponent } from '@common';

/* tslint:disable space-in-parens */
export const Test = Loadable({
  loader: () => import(/* webpackChunkName: "Test" */ './Test'),
  loading: LoadableComponent,
});
/* tslint:enable */
