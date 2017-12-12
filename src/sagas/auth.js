
import {take, put, call, select} from 'redux-saga/effects';
import {setTokenApi, clearTokenApi, login, registration} from '../api';
import {getIsAuthorized} from '../reducers/auth';
import {
  getTokenFromLocalStorage,
  setTokenToLocalStorage,
  removeTokenFromLocalStorage,
} from '../localStorage';

import {
  fetchLoginRequest, 
  fetchLoginSucess, 
  fetchLoginFailure,
  fetchRegistrationRequest,
  fetchRegistrationFailure,
  logout
} from "../actions/auth";

export function* authFlow() {
  while (true) {
    const isAuthorized = yield select(getIsAuthorized);
    const localStorageToken = yield call(getTokenFromLocalStorage);
    let token;

    if (!isAuthorized) {
      if (localStorageToken) {
        token = localStorageToken;
        yield put(fetchLoginSucess());
      } else {
        const action = yield take([fetchLoginRequest, fetchRegistrationRequest]);

        if(action.type === fetchLoginRequest.toString()){
          /*** Авторизация ***/
          try{
            token = yield call(login, action.payload);
            token = token.data.jwt;            
            yield put(fetchLoginSucess());
            
          }catch(error){
            yield put( fetchLoginFailure(error.data.message));
            continue;
          }
        }else if(action.type === fetchRegistrationRequest.toString()){
          /*** Регистрация ***/
          try{
            token = yield call(registration, action.payload);
            token = token.data.jwt;
            yield put(fetchLoginSucess());
          }catch(error){
            yield put( fetchRegistrationFailure(error.data.message.email[0]));
            continue;
          }
        }

      }
 
    }

    yield call(setTokenApi, token);
    yield call(setTokenToLocalStorage, token);
    yield take(logout);
    yield call(removeTokenFromLocalStorage);
    yield call(clearTokenApi);
  }
}

