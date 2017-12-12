import {
    fetchUserRequest,
    fetchUserSuccess,
    fetchUserFailure,
    sellCurrencyRequest,
    sellCurrencySuccess,
    sellCurrencyFailure,
    buyCurrencyRequest,
    buyCurrencySuccess,
    buyCurrencyFailure
  } from "../actions/currency";
  import { handleActions } from "redux-actions";
  import { combineReducers } from "redux";
  
 const initiaState = {
    isLoading: false,
    coins: {
      usd: 0,
      btc: 0,
      eth: 0
    },
    error: null
};

export default handleActions({
  [fetchUserRequest] : (state, action) => ({
      ...state,
      isLoading: true
  }),
  [fetchUserSuccess] : (state, action) => ({
    ...state,
    isLoading: false,
    coins: action.payload
  }),
  [fetchUserFailure] : (state, action) => ({
    ...initiaState,
    error: action.payload
  }),
  [sellCurrencyRequest] : (state, action) => ({
    ...state,
    isLoading: true
  }),
  [sellCurrencySuccess] : (state, action) => ({
    ...state,
    isLoading: false,
    coins: action.payload
  }),
  [sellCurrencyFailure] : (state, action) => ({
    ...initiaState,
    error: action.payload
  }),
  [buyCurrencyRequest] : (state, action) => ({
    ...state,
    isLoading: true
  }),
  [buyCurrencySuccess] : (state, action) => ({
    ...state,
    isLoading: false,
    coins: action.payload
  }),
  [buyCurrencyFailure] : (state, action) => ({
    ...initiaState,
    error: action.payload
  })

}, initiaState);


export const getError = state => state.wallet.error;
export const getIsLoading = state => state.wallet.isLoading;
export const getCoinsMoney = state => state.wallet.coins.usd;
export const getCoinsBtc = state => state.wallet.coins.btc;
export const getCoinsEth = state => state.wallet.coins.eth;

  