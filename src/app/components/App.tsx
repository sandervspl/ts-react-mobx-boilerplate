// @ts-ignore
import React, { Component, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { observer } from 'mobx-react';
import { withRouter, RouteComponentProps } from 'react-router';
import { Logo } from '@common';
import { Test, RouteTest } from '@modules';

@observer
class App extends Component<AppProps> {
  render() {
    return (
      <main>
        <Logo />
        <Suspense fallback={<div>loading...</div>}>
          <Switch>
            <Route exact path="/" component={Test} />
            <Route exact path="/routetest" component={RouteTest} />
          </Switch>
        </Suspense>
      </main>
    );
  }
}

export interface AppProps extends RouteComponentProps {}

// withRouter is necessary for App to re-render on route change (MobX's fault)
export default withRouter(App);
