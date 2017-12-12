import { createActions, createAction } from "redux-actions";

const actions = createActions({
  AUTH: {
    LOGIN_REQUEST: null,
    LOGIN_SUCCESS: null,
    LOGIN_FAILURE: null,
    REGISTRATION_REQUEST: null,
    REGISTRATION_SUCESS: null,
    REGISTRATION_FAILURE: null
  }
});
export const logout = createAction("LOGOUT");
export const fetchLoginRequest = actions.auth.loginRequest;
export const fetchLoginSucess = actions.auth.loginSuccess;
export const fetchLoginFailure = actions.auth.loginFailure;
export const fetchRegistrationRequest = actions.auth.registrationRequest;
export const fetchRegistrationFailure = actions.auth.registrationFailure;

