import React, {PureComponent} from 'react';
import {connect} from "react-redux";
//import {authorize} from "../../actions/auth";
import { Redirect } from 'react-router-dom';
import Particles from "react-particles-js";
import ParticlesParams from "../../particles-params";

import { fetchLoginRequest, fetchRegistrationRequest } from "../../actions/auth";

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
            console.log("dispatch register", fetchRegistrationRequest);
            this.props.fetchRegistrationRequest(fetchRegistrationRequest(this.state.authData));
        }else{
            console.log("dispatch auth");
            this.props.fetchLoginRequest(fetchRegistrationRequest(this.state.authData));
            //this.props.registration();
        }
    }

    render(){
        console.log('fetchRegistrationRequest', fetchRegistrationRequest);
        console.log('fetchLoginRequest', fetchLoginRequest);
        const bntTxt = this.state.registration ? "Регистрация" : "Вход" ;
        const linkTxt = this.state.registration ? "Войти" : "Зарегистрироваться";
        const regTxt = this.state.registration ? "Уже зарегистрированы?" : "Впервые на сайте?";

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
                                            className="auth__area" 
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
                                            className="auth__area" 
                                            placeholder="password"
                                            name="password"
                                            onChange = {this.changeHandler}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="auth__error">
                                user not found or password is incorrect
                            </div>
                            <div className="auth__row auth__row_btn">
                                <button className="auth__btn" onClick={this.btnClickHandler}>{bntTxt}</button>
                            </div>
                        </div>
                        <div className="auth-panel">
                            {regTxt} <a href="#" className="link" onClick={this.changeAuthAction}>{linkTxt}</a>
                        </div>
                    </div>
                </div>
                
            </div>
       
        );
    };
}

const mapStateToProps = state => ({
    //auth: state.auth
});
const mapDispatchToProps = {
    fetchLoginRequest, 
    fetchRegistrationRequest
    //authorize: auth => dispatch(auth) 
};
console.log('mapDispatchToProps',mapDispatchToProps);
export default connect(mapStateToProps, mapDispatchToProps)(Login);