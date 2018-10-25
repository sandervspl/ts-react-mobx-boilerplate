import * as i from '@types';
import JWToken from './JWToken';

class LocalStorage implements i.LocalStorage {
  public jwtoken = new JWToken();
}

const ls = new LocalStorage();

export const localStorageHelper = ls;
