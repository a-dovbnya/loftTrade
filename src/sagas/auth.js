//import {authorize, logout} from '../actions/auth';
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
  fetchRegistrationSucess,
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
        //yield put(fetchLoginSucess());
      } else {
        const action = yield take([
          fetchLoginRequest,
          fetchRegistrationRequest
        ]);
        // авторизация или регистрация
        console.log(action);
        if(action.type === fetchLoginRequest.toString()){
          try{
            token = yield call(login, action.payload);
          }catch(e){
            console.log(e);
            yield put(fetchLoginFailure(e.massage));
          }
        }else if(action.type === fetchRegistrationRequest.toString()){
          token = yield call(registration, action.payload);
        }
        //token = action.payload;
      }
      console.log("token = ", token);
      yield put(fetchLoginSucess());
    }

    yield call(setTokenApi, token);
    yield call(setTokenToLocalStorage, token);
    yield take(logout);
    yield call(removeTokenFromLocalStorage);
    yield call(clearTokenApi);
  }
}

