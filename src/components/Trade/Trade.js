import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import {authorize} from "../../actions/auth";
import { Redirect } from 'react-router-dom';

export class Trade extends PureComponent{


    render(){
   
        return(
           
            <div>Trade</div>
                
       
        );
    };
}

const mapStateToProps = state => ({
    //auth: state.auth
});
const mapDispatchToProps = dispatch => ({
    //authorize: auth => dispatch(auth) 
});
export default connect(mapStateToProps, mapDispatchToProps)(Trade);