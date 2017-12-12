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
} from "../../actions/currency";
import currencyReduser from "../currency";

describe('Редьюсер currency', () => {
    it("action fetchBtcRequest изменяет флаг isFething на true", () => {
        const nextState = currencyReduser({isFething: false}, { type: fetchBtcRequest.toString() });
        expect(nextState.isFething).toEqual(true);
    });
    it("action fetchBtcSuccess изменяет флаг isFething на false", () => {
        const nextState = currencyReduser({isFething: true}, { type: fetchBtcSuccess.toString() });
        expect(nextState.isFething).toEqual(false);
    });
    it("action fetchBtcSuccess изменяет поле btc", () => {
        const data = [{}, {}];
        const nextState = currencyReduser({btc: null}, { type: fetchBtcSuccess.toString(), payload: data });
        expect(nextState.btc).toEqual(data);
    });
    it("action fetchBtcFailure изменяет поле btc на null", () => {
        const nextState = currencyReduser({btc: [{},{}]}, { type: fetchBtcFailure.toString() });
        expect(nextState.btc).toEqual(null);
    });
    it("action fetchEthRequest изменяет флаг isFething на true", () => {
        const nextState = currencyReduser({isFething: false}, { type: fetchEthRequest.toString() });
        expect(nextState.isFething).toEqual(true);
    });
    it("action fetchEthSuccess изменяет флаг isFething на false", () => {
        const nextState = currencyReduser({isFething: true}, { type: fetchEthSuccess.toString() });
        expect(nextState.isFething).toEqual(false);
    });
    it("action fetchEthSuccess изменяет поле eth", () => {
        const data = [{}, {}];
        const nextState = currencyReduser({eth: null}, { type: fetchEthSuccess.toString(), payload: data });
        expect(nextState.eth).toEqual(data);
    });
    it("action fetchEthFailure изменяет поле eth на null", () => {
        const nextState = currencyReduser({eth: [{},{}]}, { type: fetchEthFailure.toString() });
        expect(nextState.eth).toEqual(null);
    });
    it("action selectBtc изменяет поле selected на btc", () => {
        const nextState = currencyReduser({btc: 'eth'}, { type: selectBtc.toString(), payload: 'btc' });
        expect(nextState.selected).toEqual('btc');
    });
    it("action selectEth изменяет поле selected на eth", () => {
        const nextState = currencyReduser({btc: 'btc'}, { type: selectEth.toString(), payload: 'eth' });
        expect(nextState.selected).toEqual('eth');
    });
    it("action selectOffset изменяет поле offset на payload", () => {
        const nextState = currencyReduser({offset: '2h'}, { type: selectOffset.toString(), payload: '4h' });
        expect(nextState.offset).toEqual('4h');
    });
});