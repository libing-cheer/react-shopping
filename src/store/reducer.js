import {combineReducers} from 'redux';
import { reducer as CartListReducer } from '../views/shop/store/index';

export default combineReducers({
    cartList: CartListReducer
})