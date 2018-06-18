import * as i from 'app/interfaces';

export interface TestStore {
  passed: boolean;
  fetcher: i.Fetcher;
  install: () => Promise<void>;
}
