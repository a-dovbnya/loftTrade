import React, {PureComponent} from 'react';
import {connect} from "react-redux";

import "./Trade.css";
import Header from "../Header";
import Footer from "../Footer";
import { LineChart } from "react-chartkick";

import { selectBtc, selectEth, selectOffset } from "../../actions/currency";
import Loader from 'react-svg-spinner';
//import TradeOperations from "../TradeOperations";

  import {
    sell,
    purchase,
    getMinVal,
    getMaxVal,
    isFething,
    getOffset,
    getSymbol

  } from "../../reducers/currency";

  const offsets = [
    ['2h', '2ч'],
    ['4h', '4ч'],
    ['8h', '8ч'],
    ['1d', '1д'],
    ['7d', '7д'],
  ];
export class Trade extends PureComponent{

    componentDidMount() {
        const symbol = this.props.match.params.symbol;
        if (symbol) {
            this.props.selectBtc(symbol);
        }        
    }
    componentWillReceiveProps(nextProps) {
        const currentSymbol = this.props.match.params.symbol;
        const nextSymbol = nextProps.match.params.symbol;

        if (currentSymbol !== nextSymbol ) {
            if(nextSymbol !== undefined){
                this.props.selectBtc(nextSymbol );
            }
        }
    }

    selectPeriodHandler = (e) => {
        this.props.selectOffset(e.target.name);
    }


    render(){
     
        const {isFething, minVal, maxVal, sell, purchase, currOffset, symbol} = this.props

        return(
            <div className="app">
                <div className="wrapp">
                    <Header symbol={symbol}/>
                    <main className="container main">
                        <aside className="main__sidebar">

                        </aside>
                        <article className="main__content">
                            <div className="period-panel" onClick = {this.selectPeriodHandler}>
                                {offsets.map((el, index) => (
                                    ( el[0] === currOffset) 
                                    ?
                                        <button className="period-panel__item period-panel__item_active" name={el[0]} key={index}>{el[1]}</button>
                                    :
                                        <button className="period-panel__item" name={el[0]} key={index}>{el[1]}</button>
                                ))}
                                
                            </div>
                            { isFething ?
                                <div className="main__loader-wrapp">
                                    <Loader size="70px" gap={4} color="fuchsia"/>
                                </div>
                            :
                                <LineChart
                                    data={[{name: 'Продажа', data: sell}, {name: 'Покупка', data: purchase}]}
                                    min={minVal}
                                    max={maxVal}
                                    width={750}
                                    height={400}
                                />

                            }
                        </article>
                    </main>
                </div>
                
                <Footer />
           </div>
                
       
        );
    };
}

const mapStateToProps = state => ({
    sell: sell(state),
    purchase: purchase(state),
    minVal: getMinVal(state),
    maxVal: getMaxVal(state),
    isFething: isFething(state),
    currOffset: getOffset(state),
    symbol: getSymbol(state)
  });
  const mapDispatchToProps = {
    selectBtc,
    selectEth,
    selectOffset
  };
export default connect(mapStateToProps, mapDispatchToProps)(Trade);