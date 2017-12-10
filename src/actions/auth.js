//import {createActions} from 'redux-actions';

//export const { authorize, logout } = createActions('AUTHORIZE', 'LOGOUT');
/*export const { 
    fetchLoginRequest, 
    fetchLoginSucess, 
    fetchLoginFailure,
    fetchRegistrationRequest,
    fetchRegistrationSucess,
    fetchRegistrationFailure,
    logout
} = createActions(
    'AUTH/LOGIN_REQUEST', 
    'AUTH/LOGIN_SUCESS',
    'AUTH/LOGIN_FAILURE',
    'AUTH/REGISTRATION_REQUEST',
    'AUTH/REGISTRATION_SUCESS',
    'AUTH/REGISTRATION_FAILURE',
    'AUTH/LOGOUT'
);*/
import { createActions, createAction } from "redux-actions";

const actions = createActions({
  AUTH: {
    LOGIN_REQUEST: undefined,
    LOGIN_SUCCESS: undefined,
    LOGIN_FAILURE: undefined,
    REGISTRATION_REQUEST: undefined,
    REGISTRATION_SUCESS: undefined,
    REGISTRATION_FAILURE: undefined
  }
});
export const logout = createAction("LOGOUT");
export const fetchLoginRequest = actions.auth.loginRequest;
export const fetchLoginSucess = actions.auth.loginSuccess;
export const fetchLoginFailure = actions.auth.loginFailure;
export const fetchRegistrationRequest = actions.auth.registrationRequest;
export const fetchRegistrationFailure = actions.auth.registrationFailure;

