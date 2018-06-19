import * as i from 'app/types';

export interface TestStore {
  passed: boolean;
  fetcher: i.Fetcher;
  install: () => Promise<void>;
}
