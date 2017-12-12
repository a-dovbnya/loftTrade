import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import "./Header.css";
import { Link } from 'react-router-dom';
import {getCurrentBtcPurchase, getCurrentEthPurchase} from "../../reducers/currency";
import {logout} from '../../actions/auth';

export class Header extends PureComponent{

    logoutHandler = () => {
        this.props.logout();
    }

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
                        </div>

                        <div className="currency-instrument">
                            <div className="currency-instrument__item">
                                <Link to="/trade/btc" className={"currency-instrument__link " + btcClass}>
                                    <span className="currency-instrument__txt-wrapp">
                                        <span className="currency-instrument__cource">{this.props.currentBtcPurchase}</span>
                                        <span className="currency-instrument__name">1 BTC</span>
                                    </span>
                                </Link>
                            </div>
                            <div className="currency-instrument__item">
                                <Link to="/trade/eth" className={"currency-instrument__link " + ethClass}>
                                    <span className="currency-instrument__txt-wrapp">
                                        <span className="currency-instrument__cource">{this.props.currentEthPurchase}</span>
                                        <span className="currency-instrument__name">1 ETH</span>
                                    </span>
                                </Link>
                            </div>
                        </div>

                        <nav className="header-nav"> 
                            <div className="header-nav__item"><button className="header-nav__link" onClick={this.logoutHandler}>Выход</button></div>
                        </nav>
                    </div>
                </div>
            </header>
                
       
        );
    };
}

const mapStateToProps = state => ({
    currentBtcPurchase: getCurrentBtcPurchase(state).toFixed(1),
    currentEthPurchase: getCurrentEthPurchase(state).toFixed(1)
});
const mapDispatchToProps = {
    logout
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);