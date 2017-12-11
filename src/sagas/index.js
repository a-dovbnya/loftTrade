/*import {fork} from 'redux-saga/effects';
import {fetchUserWatch} from './users';
import {fetchFollowersWatch} from './followers';
import { authFlow } from "./auth";*/
import {fork} from 'redux-saga/effects';
import { authFlow } from "./auth";
import {
  currencyWatch,
  fetchBtcWatch,
  fetchEthWatch
} from "./currency";


export default function*() {
  yield fork(authFlow);
  yield fork(currencyWatch);
  yield fork(fetchBtcWatch);
  yield fork(fetchEthWatch);
}
