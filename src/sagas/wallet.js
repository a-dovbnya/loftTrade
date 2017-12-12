import {takeLatest, fork, take, select, put, cancel, call} from 'redux-saga/effects';
import {delay} from 'redux-saga';
import {fetchLoginSucess, logout} from '../actions/auth';
import {getOffset} from '../reducers/currency';
import {
  /*selectBtc,
  selectEth,
  fetchBtcRequest,
  fetchEthRequest,
  fetchBtcSuccess,
  fetchBtcFailure,
  fetchEthFailure,
  fetchEthSuccess,
  selectOffset,*/
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} from '../actions/currency';
import {getWallet} from '../api';



/*function* fetchBtcFlow(action) {
  try {
    const response = yield call(candles, 'btc', action.payload);
    yield put(fetchBtcSuccess(response.data.result));
  } catch (error) {
    yield put(fetchBtcFailure(error));
  }
}


export function* fetchBtcWatch() {
  yield takeLatest(fetchBtcRequest, fetchBtcFlow);
}*/

function* fetchUserFlow(action) {
    try {
      const response = yield call(getWallet);
      yield put(fetchUserSuccess(response.data.result));
    } catch (error) {
      yield put(fetchUserFailure(error));
    }
  }
  
  
  export function* fetchUserWatch() {
    yield takeLatest(fetchUserRequest, fetchUserFlow);
  }
