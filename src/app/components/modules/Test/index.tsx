import * as i from '@types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import Stores from 'app/stores';
import { Button, Page } from '@common';
import { TestPassed } from './components';

@inject(Stores.testStore)
@observer
class Test extends Component<HomeProps, {}> {
  render() {
    const { passed, install, fetcher: { isLoading } } = this.props.testStore;

    return (
      <Page>
        {passed ? (
          <TestPassed />
        ) : (
          <Button onClick={install}>
            {isLoading ? 'Installing...' : 'Test installation'}
          </Button>
        )}
        <p><Link to="/routetest">Test routing</Link></p>
      </Page>
    );
  }
}

export interface HomeProps {
  testStore?: i.TestStore;
}

export default Test;
