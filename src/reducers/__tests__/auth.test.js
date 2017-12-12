import {
    fetchLoginSucess, 
    fetchLoginFailure,
    fetchRegistrationFailure,
    logout
} from "../../actions/auth";
  import authReduser from "../auth";

  describe('Редьюсер auth', () => {

    it("action fetchLoginSucess изменяет флаг isAuthorized", () => {
        const nextState = authReduser({isAuthorized: false}, { type: fetchLoginSucess.toString() });
        expect(nextState.isAuthorized).toEqual(true);
    });
    it("action fetchLoginFailure изменяет поле loginError", () => {
        const error = 'error';
        const nextState = authReduser({loginError: null}, { type: fetchLoginFailure.toString(), payload: error });
        expect(nextState.loginError).toEqual(error);
    });
    it("action fetchRegistrationFailure изменяет поле registationError", () => {
        const error = 'error';
        const nextState = authReduser({registationError: null}, { type: fetchRegistrationFailure.toString(), payload: error });
        expect(nextState.registationError).toEqual(error);
    });
    it("action logout изменяет state на initialState", () => {
        const initiaState = {
            isAuthorized: false,
            loginError: null,
            registationError: null
        }
        const nextState = authReduser({registationError: 'error'}, { type: logout.toString() });
        expect(nextState).toEqual(initiaState);
    });
  });