
import * as actionType from '../constants/cartConstants';

export const cartReducer = (state = {cartItems: []},action) =>{
    switch(action.type){
        case actionType.ADD_TO_CART:
            const item = action.payload;
            const exist = state.cartItems.find(product => product.id === item.id);

            if(exist){
                return{...state, cartitems: state.cartItems.map(data => data.product === exist.product ? item : data)}
            }
            else{
                return{...state, cartItems: [...state.cartItems, item]}
            }

            case actionType.UPDATE_QUANTITY_TO_CART:
                 return{
                    ...state,
                    cartItems: state.cartItems.map((product) => {
                      if (product.id === action.payload.id) {
                        const newQuantity = product.quantity + action.payload.change;
                        return { ...product, quantity: Math.max(newQuantity, 1) };
                      }
                      return product;
                    }),
                     }
    
            case actionType.REMOVE_FROM_CART:
                return {
                    ...state, cartItems: state.cartItems.filter(product => product.id !== action.payload)
                }

                case actionType.CHECKOUT_FROM_PRODUCT:
                    console.log(action.payload)
                    return{
                    ...state,
                   cartItems: [...state.cartItems,action.payload],
            }     
            default:
                return state;
    }
}

