import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import Particles from "react-particles-js";
import ParticlesParams from "../../particles-params";

import { fetchLoginRequest, fetchRegistrationRequest } from "../../actions/auth";
import { getIsLoginError, getIsregistationError} from "../../reducers/auth";

import './Login.css';


export class Login extends PureComponent{

    state = {
        authData: {
            email: '',
            password: ''
        },
        registration: false
        
    }
    changeHandler = (e) => {
        this.setState({authData: {...this.state.authData, [e.target.name]: e.target.value}} );
    }
    changeAuthAction = (e) => {
        e.preventDefault();
        this.setState({registration: !this.state.registration});
    }
    btnClickHandler = () => {
        if(this.state.registration){
            this.props.fetchRegistrationRequest(this.state.authData);
        }else{
            this.props.fetchLoginRequest(this.state.authData);
        }
    }

    render(){

        const bntTxt = this.state.registration ? "Регистрация" : "Вход" ;
        const linkTxt = this.state.registration ? "Войти" : "Зарегистрироваться";
        const regTxt = this.state.registration ? "Уже зарегистрированы?" : "Впервые на сайте?";
        const error = this.props.loginError || this.props.registrationError;

        return(
           
            <div className="app">
                <Particles params={ParticlesParams} className="app__particle-bg"/>
                <div className="auth-wrapp">
                    <div className="auth">
                        <div className="auth__logo">
                            <img src={process.env.PUBLIC_URL + '/assets/img/logo.svg'} alt="" className="auth__img"/>
                        </div>
                        <div className="auth__form">
                            <div className="auth__row">
                                <div className="auth__area-box">
                                    <div className="auth__col auth__col_login"></div>
                                    <div className="auth__col">
                                        <input 
                                            type="text" 
                                            className="auth__area auth__area_email" 
                                            placeholder="login"
                                            name="email"
                                            onChange = {this.changeHandler}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="auth__row">
                                <div className="auth__area-box">
                                    <div className="auth__col auth__col_pass"></div>
                                    <div className="auth__col">
                                        <input 
                                            type="password" 
                                            className="auth__area auth__area_password" 
                                            placeholder="password"
                                            name="password"
                                            onChange = {this.changeHandler}
                                        />
                                    </div>
                                </div>
                            </div>
                            { error && <div className="auth__error">{error}</div> }
                            <div className="auth__row auth__row_btn">
                                <button className="auth__btn" onClick={this.btnClickHandler}>{bntTxt}</button>
                            </div>
                        </div>
                        <div className="auth-panel">
                            {regTxt} <span className="link change-auth-method" onClick={this.changeAuthAction}>{linkTxt}</span>
                        </div>
                    </div>
                </div>
                
            </div>
       
        );
    };
}

const mapStateToProps = state => ({
    loginError: getIsLoginError(state),
    registrationError: getIsregistationError(state)
});
const mapDispatchToProps = {
    fetchLoginRequest, 
    fetchRegistrationRequest
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);