import {handleActions} from 'redux-actions';
//import {authorize, logout} from "../actions/auth";
import {
    fetchLoginRequest, 
    fetchLoginSucess, 
    fetchLoginFailure,
    fetchRegistrationRequest,
    fetchRegistrationSucess,
    fetchRegistrationFailure,
    logout
} from "../actions/auth";

const initiaState = {
    isAuthorized: false,
    loginError: null,
    registationError: null
  }

export default handleActions({
    [fetchLoginSucess]: (state, action) => ({
        ...state, 
        isAuthorized: true
    }),
    [fetchLoginFailure]: (state, action) => ({
        ...initiaState, 
        loginError: action.payload
    }),
    [fetchRegistrationFailure]: (state, action) => ({
        ...state, 
        registationError: action.payload
    }),
    [logout]: (state, action) => ({
        ...state,
        isAuthorized: false
    })
}, initiaState);

export const getIsAuthorized = state =>  state.auth.isAuthorized;