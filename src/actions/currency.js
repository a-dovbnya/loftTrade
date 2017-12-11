import { createActions } from "redux-actions";

const   actions = createActions({
  CURRENCY: {
    FETCH_BTC_REQUEST: null,
    FETCH_BTC_SUCCESS: null,
    FETCH_BTC_FAILURE: null,
    FETCH_ETH_REQUEST: null,
    FETCH_ETH_SUCCESS: null,
    FETCH_ETH_FAILURE: null,
    SELECT_BTC: null,
    SELECT_ETH: null,
    SELECT_OFFSET: null,
  }
});

export const selectBtc = actions.currency.selectBtc;
export const selectEth = actions.currency.selectEth;
export const fetchBtcRequest = actions.currency.fetchBtcRequest;
export const fetchEthRequest = actions.currency.fetchEthRequest;
export const fetchBtcSuccess = actions.currency.fetchBtcSuccess;
export const fetchBtcFailure = actions.currency.fetchBtcFailure;
export const fetchEthFailure = actions.currency.fetchEthFailure;
export const fetchEthSuccess = actions.currency.fetchEthSuccess;
export const selectOffset = actions.currency.selectOffset;