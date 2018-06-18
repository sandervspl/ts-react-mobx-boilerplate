import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import createBrowserHistory from 'history/createBrowserHistory';

// import instance stores
import testStore from './Test';

let browserHistory;
if (__CLIENT__) {
  browserHistory = createBrowserHistory();
}

const routingStore = new RouterStore();

// Store list for MobX inject
enum Stores {
  routingStore = 'routingStore',
  testStore = 'testStore',
}
export default Stores;

// Stores for MobX provider
export const storeDirectory = {
  routingStore,
  testStore,
};

let historySyncedStore = null;
if (__CLIENT__) {
  historySyncedStore = syncHistoryWithStore(browserHistory, routingStore);
}

export const history = historySyncedStore;

// DEBUGGING
if (__DEV__) {
  window.stores = storeDirectory;
}
