import * as i from './types';
import { observable, computed, action } from 'mobx';

class TestStore implements i.TestStore {
  @observable public passed = false;
  @observable private loading = false;
  @observable private error = false;

  @computed
  public get isLoading(): boolean {
    return this.loading;
  }

  @action
  public install = (): Promise<void> => {
    this.loading = true;

    return new Promise((resolve) => {
      setTimeout(() => {
        this.loading = false;
        this.passed = true;
        resolve();
      }, 2000);
    });
  }
}

const store = new TestStore();

export default store;
