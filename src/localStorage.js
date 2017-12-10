export function getTokenFromLocalStorage() {
  return localStorage.getItem('trade_acess_token');
}

export function setTokenToLocalStorage(token) {
  localStorage.setItem('trade_acess_token', token);
}

export function removeTokenFromLocalStorage() {
  localStorage.removeItem('trade_acess_token');
}
