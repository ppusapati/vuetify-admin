// import Cookies from 'js-cookie';
import { getStorage, removeStorage, setStorage } from './storage';

const TokenKey = 'access_token';

export function getToken() {
  return getStorage({
    name: TokenKey
  });
}

export function setToken(token) {
  setStorage({
    name: TokenKey,
    content: token,
    type: 'session'
  });
}

export function removeToken() {
  removeStorage({
    name: TokenKey
  });
}
