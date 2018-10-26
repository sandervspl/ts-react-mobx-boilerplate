/* tslint:disable space-in-parens */
import * as React from 'react';

export const Test = React.lazy(() => import(
  /* webpackChunkName: "Test" */ './Test'
));
export const RouteTest = React.lazy(() => import(
  /* webpackChunkName: "RouteTest" */ './RouteTest'
));
