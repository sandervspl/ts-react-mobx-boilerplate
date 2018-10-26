/* tslint:disable space-in-parens */
// @ts-ignore
import { lazy } from 'react';

export const Test = lazy(() => import(
  /* webpackChunkName: "Test" */ './Test'
));
export const RouteTest = lazy(() => import(
  /* webpackChunkName: "RouteTest" */ './RouteTest'
));
