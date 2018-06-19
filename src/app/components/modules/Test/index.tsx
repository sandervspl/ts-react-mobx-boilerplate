import * as i from 'app/types';
import * as React from 'react';
import { Button } from 'components/common';
import { LogoIconWrapper, Section, TestPassed } from './components';
import { inject, observer } from 'mobx-react';
import Stores from 'app/stores';

@inject(Stores.testStore)
@observer
class Test extends React.Component<HomeProps, {}> {
  render() {
    const { passed, install, fetcher: { isLoading } } = this.props.testStore;

    return (
      <Section>
        <LogoIconWrapper />
        {passed ? (
          <TestPassed />
        ) : (
          <Button onClick={install}>
            {isLoading ? 'Installing ...' : 'Test installation'}
          </Button>
        )}
      </Section>
    );
  }
}

export interface HomeProps {
  testStore?: i.TestStore;
}

export default Test;
