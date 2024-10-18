import CartItems from '../../components/cart/cartItem';
import * as actionType from '../constants/checkOutconstants';

export const checkOutReducer = (state = {product:[]},action) =>{
    switch(action.type){
        case actionType.CHECKOUT_FROM_PRODUCT:
            console.log(action.payload)
            return{
            ...state,
           product: [...state.product,action.payload],
    }            
        case actionType.CHECKOUT_FROM_CART:
            console.log(action.payload)
            return {
                ...state,
                product: action.payload,
                total: action.payload.reduce((acc, item) => acc + item.price, 0),
              };
        case actionType.CHECKOUT_FROM_CART_ERROR:
            return{
            ...state,
            checkoutStatus: 'failed',}
         default:
                return state;
    
    }
}