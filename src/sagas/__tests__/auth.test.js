import {authFlow} from '../auth';
import {fetchLoginRequest, fetchRegistrationRequest, fetchLoginFailure, fetchRegistrationFailure} from '../../actions/auth';
import {select, call, put, take} from 'redux-saga/effects';
import {getIsAuthorized} from '../../reducers/auth';
import {
  getTokenFromLocalStorage,
} from '../../localStorage';
import {login, registration} from '../../api';

describe('Сага authFlow', () => {
    const saga = authFlow();

    describe('Сценарий для авторизации без токена авторизации в localstorage', () => {
        it('Эфект select getIsAuthorized', () => {
            expect(saga.next().value).toEqual(select(getIsAuthorized));
        });
        it('Эфект call getTokenFromLocalStorage', () => {
            expect(saga.next().value).toEqual(call(getTokenFromLocalStorage));
        });
        it("Эффект take, c ожиданием fethLoginRequest и fethRegistrationRequest", () => {
            expect(saga.next().value).toEqual(take([fetchLoginRequest, fetchRegistrationRequest]));
        });
        it("Для action fetchLoginRequest то ожидается эффект call login", () => {
            const action = {
                type: fetchLoginRequest.toString(),
                payload: { email: "test@test", password: 'test' }
            };
            expect(saga.next(action).value).toEqual(call(login, action.payload));
        });
        it("В случае ошибки отправляем action fetchLoginFailure", () => {
            const error = {
                data: {
                    message: 'error'
                }
            }
          
            expect(saga.throw(error).value).toEqual(put(fetchLoginFailure(error.data.message)));
        });
        
    });

    describe('Сценарий для регистрации без токена авторизации в localstorage', () => {
        it('Эфект select getIsAuthorized', () => {
            expect(saga.next().value).toEqual(select(getIsAuthorized));
        });
        it('Эфект call getTokenFromLocalStorage', () => {
            expect(saga.next().value).toEqual(call(getTokenFromLocalStorage));
        });
        it("Эффект take, c ожиданием fethLoginRequest и fethRegistrationRequest", () => {
            expect(saga.next().value).toEqual(take([fetchLoginRequest, fetchRegistrationRequest]));
        });
        it("Для action fetchRegistrationRequest то ожидается эффект call registration", () => {
            const action = {
                type: fetchRegistrationRequest.toString(),
                payload: { email: "test@test", password: 'test' }
            };
      
            expect(saga.next(action).value).toEqual(call(registration, action.payload));
        });
        it("В случае ошибки отправляем action fetchRegistrationFailure", () => {
            const error = {
                data: {
                    message: {
                        email: ['test@test']
                    }
                }
            }
          
            expect(saga.throw(error).value).toEqual(put(fetchRegistrationFailure(error.data.message.email[0])));
        });
    });
    

});