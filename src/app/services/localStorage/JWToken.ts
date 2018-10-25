import * as i from '@types';
import LocalStorageHelper from './LocalStorageHelper';

export default class EditorStorage extends LocalStorageHelper {
  constructor() {
    super(i.LOCAL_STORAGE_KEY.jwtoken);
  }
}
