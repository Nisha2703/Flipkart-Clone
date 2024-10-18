import {createStore, combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension';

import { getProductDetailReducer, getProductsReducer } from './reducers/productreducer';
import {cartReducer} from './reducers/cartReducers';

const reducer = combineReducers({
    Products: getProductsReducer,
    getProductDetails: getProductDetailReducer,
    cart: cartReducer,
});
const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default  store;

