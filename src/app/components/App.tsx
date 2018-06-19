import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router';
import { Test } from './modules';

const App: React.StatelessComponent<AppProps> = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Test}/>
      </Switch>
    </main>
  );
};

export interface AppProps {}

// withRouter is necessary for App to re-render on route change (MobX's fault)
export default withRouter(observer(App));
