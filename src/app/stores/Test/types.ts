import * as i from '@types';

export interface TestStore {
  passed: boolean;
  fetcher: i.Fetcher;
  install: () => Promise<void>;
}
