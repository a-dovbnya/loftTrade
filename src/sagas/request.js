import {call, put} from 'redux-saga/effects';
import {clearNetworkErrors, networkError} from '../actions/network';
//import {logout} from '../actions/auth';
import {getIsNetworkErrorPresent} from '../reducers/network';
import {login, registration} from '../api';

import {
  fetchLoginFailure,
  fetchRegistrationFailure,
  logout
} from "../actions/auth";

/*export default function*(fn, args) {
  try {
    const response = yield call(fn, args);
    if (yield select(getIsNetworkErrorPresent)) yield put(clearNetworkErrors());
    return response;
  } catch (error) {
    yield put(networkError(error));
    if (error.response.status === 401) yield put(logout());

    throw error;
  }
}*/

export default function*(fn, args) {
  try {
    const response = yield call(fn, args);
    // if (yield select(getIsNetworkErrorPresent))
    //   yield put(clearNetworkErrors());
    console.log(response);
    return response;
  } catch (error) {
    if (fn === login) {
      console.log(error);
      console.log('fetchLoginFailure = ', fetchLoginFailure(error.data.message));
      yield put(fetchLoginFailure(error.data.message));
    } else if (fn === registration) {
      yield put(fetchRegistrationFailure(error.data.message.email[0]));
    }
    // yield put(networkError(error));
    //if (error.status === 401) yield put(logout());

    //throw error;
  }
}
