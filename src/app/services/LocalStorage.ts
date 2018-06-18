import * as i from 'app/interfaces';

class jwToken implements i.JWTokenService {
  get = (): string | null => {
    return localStorage ? localStorage.getItem(i.LOCAL_STORAGE_KEYS.jwToken) : null;
  }
  
  set = (data: { token: string, expiresIn: number }) => {
    localStorage && localStorage.setItem(i.LOCAL_STORAGE_KEYS.jwToken, JSON.stringify(data));
  }
  
  clear = () => {
    localStorage && localStorage.removeItem(i.LOCAL_STORAGE_KEYS.jwToken);
  }
}

class LocalStorage implements i.LocalStorage {
  jwToken = new jwToken();
}

const ls = new LocalStorage();

export default ls;