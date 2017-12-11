import {combineReducers} from 'redux';
/*import users from './users.js';
import followers from './followers';
import auth from './auth';
import network from './network';*/
import auth from './auth';
//import network from './network';
import currency from "./currency";

export default combineReducers({
  auth,
  currency
  //followers,
  //users,
  //network
});
