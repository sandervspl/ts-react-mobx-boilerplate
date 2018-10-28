import { RouteComponentProps as IRouteComponentProps } from 'react-router-dom';

export { History } from 'history';
export { RouterStore } from 'mobx-react-router';

export * from 'services/composition/types';
export * from 'services/localStorage/types';

export * from 'stores/Test/types';

export * from 'styles/types';

// Make generics optional
export interface RouteComponentProps<P = any, C = any> extends IRouteComponentProps<P, C> {}

export type AppType = 'client' | 'server';
export type EnvType = 'development' | 'acceptation' | 'production';
