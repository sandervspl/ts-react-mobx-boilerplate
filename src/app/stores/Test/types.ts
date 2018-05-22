import { AsyncStore } from 'stores/abstract/types';

export interface TestStore extends AsyncStore {
  passed: boolean;
  isLoading: boolean;
  install: () => Promise<void>;
}
