import {
    fetchBtcRequest,
    fetchBtcSuccess,
    fetchBtcFailure,
    fetchEthRequest,
    fetchEthSuccess,
    fetchEthFailure,
    selectBtc,
    selectEth,
    selectOffset
} from "../actions/currency";
import { handleActions } from "redux-actions";

  const initiaState = {
      selected: "btc",
      offset: "4h",
      btc: [],
      eth: [],
      isFething: false
  };

  export default handleActions({
    [fetchBtcRequest] : (state, action) => ({
        ...state,
        isFething: true
    }),
    [fetchBtcSuccess] : (state, action) => ({
        ...state,
        btc: action.payload,
        isFething: false
    }),
    [fetchBtcFailure] : (state, action) => ({
        ...state,
        btc: null
    }),
    [fetchEthRequest] : (state, action) => ({
        ...state,
        isFething: true
    }),
    [fetchEthSuccess] : (state, action) => ({
        ...state,
        eth: action.payload,
        isFething: false
    }),
    [fetchEthFailure] : (state, action) => ({
        ...state,
        eth: null
    }),
    [selectBtc] : (state, action) => ({
        ...state,
        selected: action.payload
    }),
    [selectEth] : (state, action) => ({
        ...state,
        selected: action.payload
    }),
    [selectOffset] : (state, action) => ({
        ...state,
        offset: action.payload
    })
  }, initiaState);

  export const getOffset = state => state.currency.offset;
  /*export const selected = handleActions(
    {
      [selectBtc]: () => "btc",
      [selectEth]: () => "eth"
    },
    "btc"
  );
  export const offset = handleAction(
    selectOffset,
    (state, action) => action.payload,
    "4h"
  );
  export const btc = handleActions(
    {
      [fetchBtcRequest]: () => [],
      [fetchBtcSuccess]: (state, action) => action.payload,
      [fetchBtcFailure]: error => error
    },
    []
  );
  export const eth = handleActions(
    {
      [fetchEthRequest]: () => [],
      [fetchEthSuccess]: (state, action) => action.payload,
      [fetchEthFailure]: error => error
    },
    []
  );
  export const isBtcLoading = handleActions(
    {
      [fetchBtcRequest]: () => true,
      [fetchBtcSuccess]: () => false,
      [fetchBtcFailure]: () => false
    },
    false
  );
  export const isEthLoading = handleActions(
    {
      [fetchEthRequest]: () => true,
      [fetchEthSuccess]: () => false,
      [fetchEthFailure]: () => false
    },
    false
  );
  export default combineReducers({
    selected,
    offset,
    btc,
    eth,
    isBtcLoading,
    isEthLoading
  });
  export const getOffset = state => state.currency.offset;
  export const getSelected = state => state.currency.selected;
  export const getIsBtcLoading = state => state.currency.isBtcLoading;
  export const getIsEthLoading = state => state.currency.isEthLoading;
  export const sellBtc = state =>
    state.currency.btc.map(item => [new Date(item.mts), item.sell]);
  export const purchaseBtc = state =>
    state.currency.btc.map(item => [new Date(item.mts), item.purchase]);
  export const sellEth = state =>
    state.currency.eth.map(item => [new Date(item.mts), item.sell]);
  export const purchaseEth = state =>
    state.currency.eth.map(item => [new Date(item.mts), item.purchase]);
  export const maxEth = state => state.currency.eth.map(item => item.sell);
  export const getMax = currency =>
    currency.reduce(
      (acc, { sell, purchase }) => Math.max(acc, sell, purchase),
      0
    );
  export const getMin = currency =>
    currency.reduce(
      (acc, { sell, purchase }) => Math.min(acc, sell, purchase),
      Number.MAX_SAFE_INTEGER
    );
*/
export const isFething = state => state.currency.isFething;
export const sell = state => state.currency[state.currency.selected].map(item => [new Date(item.mts), item.sell]);
export const purchase = state => state.currency[state.currency.selected].map(item => [new Date(item.mts), item.purchase]);
export const getMinVal = state => {
    let arr = state.currency[state.currency.selected].map((el) => el.purchase);
    return Math.min.apply(null, arr);
}
export const getMaxVal = state => {
    let arr = state.currency[state.currency.selected].map((el) => el.sell);
    return Math.max.apply(null, arr);
}