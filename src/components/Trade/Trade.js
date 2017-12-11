import React, {PureComponent} from 'react';
import {connect} from "react-redux";
//import {authorize} from "../../actions/auth";
//import { Redirect } from 'react-router-dom';
import "./Trade.css";
import Header from "../Header";
import Footer from "../Footer";
import { LineChart } from "react-chartkick";

import { selectBtc, selectEth, selectOffset } from "../../actions/currency";

import Loader from 'react-svg-spinner';
/*import {
    getOffset,
    getSelected,
    getIsBtcLoading,
    getIsEthLoading,
    sellBtc,
    purchaseBtc,
    sellEth,
    purchaseEth,
    getMax,
    getMin
  } from "../../reducers/currency";*/
  import {
    sell,
    purchase,
    getMinVal,
    getMaxVal,
    isFething

  } from "../../reducers/currency";

const offsets = {
    '2h': '2ч',
    '4h': '4ч',
    '8h': '8ч',
    '1d': '1д',
    '7d': '7д',
  };
export class Trade extends PureComponent{

    state = {};
    /*constructor(props) {
      super(props);
      this.state = {
        currency: this.props.select
      };
    }*/
    /*componentWillReceiveProps(nextProps) {
      if (this.props.select !== nextProps.select) {
        this.setState({ currency: nextProps.select });
      }
    }*/

    componentDidMount() {
        const symbol = this.props.match.params.symbol;
        console.log(symbol);
        if (symbol) {
            //this.props.fetchUserRequest(fetchUserRequest(name));
        }else{
            //this.props.fetchTokenOwnerRequest(fetchTokenOwnerRequest());
        }
        
    }


    render(){
        /*const {
            offset,
            sellBtc,
            sellEth,
            purchaseEth,
            purchaseBtc,
            minBtc,
            maxBtc,
            minEth,
            maxEth,
            isBtcLoading,
            isEthLoading
          } = this.props;*/
     
        console.log(this.props);
        const {isFething, minVal, maxVal, sell, purchase} = this.props

        return(
            <div className="app">
                <div className="wrapp">
                    <Header />
                    <main className="container main">
                        <aside className="main__sidebar">
                            
                        </aside>
                        <article className="main__content">
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
    //select: getSelected(state),
    //isBtcLoading: getIsBtcLoading(state),
    //isEthLoading: getIsEthLoading(state),
    //maxBtc: getMax(state.currency.btc),
    //maxEth: getMax(state.currency.eth),
    //minBtc: getMin(state.currency.btc),
    //minEth: getMin(state.currency.eth),
    //offset: getOffset(state),
    sell: sell(state),
    purchase: purchase(state),
    minVal: getMinVal(state),
    maxVal: getMaxVal(state),
    isFething: isFething(state)
    //purchaseEth: purchaseEth(state),
    //sellEth: sellEth(state)
  });
  const mapDispatchToProps = {
    //selectBtc,
    //selectEth,
    //selectOffset
  };
export default connect(mapStateToProps, mapDispatchToProps)(Trade);