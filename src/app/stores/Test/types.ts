export interface TestStore {
  passed: boolean;
  isLoading: boolean;
  install: () => Promise<void>;
}
