import * as i from '@types';
import { observable, action } from 'mobx';
import * as c from 'app/services/composition';

class TestStore implements i.TestStore {
  @observable passed = false;
  public fetcher = new c.Fetcher();

  @action
  public install = (): Promise<void> => {
    this.fetcher.setLoading();

    return new Promise((resolve) => {
      setTimeout(() => {
        this.fetcher.setSuccess();
        this.passed = true;
        resolve();
      }, 2000);
    });
  }
}

const store = new TestStore();

export default store;
