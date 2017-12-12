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

export const isFething = state => state.currency.isFething;
export const sell = state => state.currency[state.currency.selected].map(item => [new Date(item.mts), item.sell]);
export const purchase = state => state.currency[state.currency.selected].map(item => [new Date(item.mts), item.purchase]);
export const getMinVal = state => {
    let arr = state.currency[state.currency.selected].map((el) => el.purchase);
    return Math.min.apply(null, arr);
};
export const getMaxVal = state => {
    let arr = state.currency[state.currency.selected].map((el) => el.sell);
    return Math.max.apply(null, arr);
};
export const getOffset = state => state.currency.offset;
export const getSymbol = state => state.currency.selected;

export const getCurrentBtcSell = state => {
    if(state.currency.btc.length > 0){
        return state.currency.btc[0].sell;
    }else{
        return 0;
    }
}
export const getCurrentBtcPurchase = state => {
    if(state.currency.btc.length > 0){
        return state.currency.btc[0].purchase;
    }else{
        return 0;
    }
}
export const getCurrentEthSell = state => {
    if(state.currency.eth.length > 0){
        return state.currency.eth[0].sell;
    }else{
        return 0;
    }
}
export const getCurrentEthPurchase = state => {
    if(state.currency.eth.length > 0){
        return  state.currency.eth[0].purchase;
    }else{
        return 0;
    }
}