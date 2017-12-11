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

import request from "./request";

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
        const action = yield take([
          fetchLoginRequest,
          fetchRegistrationRequest
        ]);
        // авторизация или регистрация
        if(action.type === fetchLoginRequest.toString()){
          // Авторизация
          try{
            token = yield call(login, action.payload);
            console.log('token = ', token);
            yield put(fetchLoginSucess());
            console.log(token);
          }catch(error){
            console.log(error);
            fetchLoginFailure(error.data.message);
          }
        }else if(action.type === fetchRegistrationRequest.toString()){
          // Регистрация

        }

        /*if (action.type === fetchLoginRequest.toString()) {
          
          token = yield call(request, login, action.payload);
          console.log("token = ", token);
        } else if ( action.type === fetchRegistrationRequest.toString() ) {
          token = yield call(request, registration, action.payload);
          console.log("token = ", token);
        }*/
        //yield put(fetchLoginSucess());
        //token = action.payload;
      }
 
      
    }

    yield call(setTokenApi, token);
    yield call(setTokenToLocalStorage, token);
    yield take(logout);
    yield call(removeTokenFromLocalStorage);
    yield call(clearTokenApi);
  }
}

