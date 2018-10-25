import * as i from '@types';
import JWToken from './JWToken';

export interface LocalStorage {
  jwtoken: JWToken;
}

export enum LOCAL_STORAGE_KEY {
  'jwtoken' = 'boilerplate_jwtoken',
}
