import {takeLatest, fork, take, select, put, cancel, call} from 'redux-saga/effects';
import {
    fetchCurrencyFlow,
    currencyWatch,
    fetchBtcFlow,
    fetchBtcWatch,
    fetchEthFlow,
    fetchEthWatch,
  } from "../currency";

  import {
    selectBtc,
    selectEth,
    fetchBtcRequest,
    fetchEthRequest,
    fetchBtcSuccess,
    fetchBtcFailure,
    fetchEthFailure,
    fetchEthSuccess,
    selectOffset,
  } from '../../actions/currency';

  import {getOffset} from '../../reducers/currency';

  import {candles} from '../../api';

  describe('currency', () => {

    describe('currencyFlow', () => {
        const saga = fetchCurrencyFlow();

        it('Эфект select getOffset', () => {
            expect(saga.next().value).toEqual(select(getOffset));
        });

    });

    describe('fetchBtcFlow', () => {
        
        it('Эфект call selectBtc', () => {
            const action = {type: selectBtc.toString(), payload: 'btc'}
            const saga = fetchBtcFlow(action);
            expect(saga.next().value).toEqual(call(candles, 'btc', action.payload));
        });
        
    });

    describe('fetchEthFlow', () => {
        it('Эфект call selectEth', () => {
            const action = {type: selectEth.toString(), payload: 'eth'}
            const saga = fetchEthFlow(action);
            expect(saga.next().value).toEqual(call(candles, 'eth', action.payload));
        });
    });
  });