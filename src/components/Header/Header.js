import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import "./Header.css";
import { Link } from 'react-router-dom';

export class Header extends PureComponent{

    render(){
        const symbol = this.props.symbol;
        let btcClass = '';
        let ethClass = '';
        
        if(symbol === "btc"){
            btcClass = "currency-instrument__link_active";
        }else if(symbol === "eth"){
            ethClass = "currency-instrument__link_active";
        }

        return(
           
            <header className="header-wrapp">
                <div className="container">
                    <div className="header">
                        <div className="header__logo-box">
                            <div className="header__logo">
                                <img src={"/assets/img/Logo-white.svg"} className="header__logo-img" alt=""/>
                            </div>
                            <a href="#" className="header__bargaining link">Торги</a>
                        </div>

                        <div className="currency-instrument">
                            <div className="currency-instrument__item">
                                <Link to="/trade/btc" className={"currency-instrument__link " + btcClass}>
                                    <span className="currency-instrument__txt-wrapp">
                                        <span className="currency-instrument__cource">4 277,5</span>
                                        <span className="currency-instrument__name">1 BTC</span>
                                    </span>
                                </Link>
                            </div>
                            <div className="currency-instrument__item">
                                <Link to="/trade/eth" className={"currency-instrument__link " + ethClass}>
                                    <span className="currency-instrument__txt-wrapp">
                                        <span className="currency-instrument__cource">290</span>
                                        <span className="currency-instrument__name">1 ETH</span>
                                    </span>
                                </Link>
                            </div>
                        </div>

                        <nav className="header-nav">
                            <div className="header-nav__item"><a href="#" className="header-nav__link">Лента</a><span className="header-nav__quantity">9+</span></div>
                            <div className="header-nav__item"><a href="#" className="header-nav__link">3 место</a></div>
                            <div className="header-nav__item"><a href="#" className="header-nav__link">user123@mail.ru</a></div>
                        </nav>
                    </div>
                </div>
            </header>
                
       
        );
    };
}

const mapStateToProps = state => ({
    //auth: state.auth
});
const mapDispatchToProps = dispatch => ({
    //authorize: auth => dispatch(auth) 
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);