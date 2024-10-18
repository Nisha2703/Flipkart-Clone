
import axios from "axios";
import * as actionType from '../constants/cartConstants';

export const addToCart = (id,quantity)=> async(dispatch)=>{
    try{
        const { data } = await axios.get(`http://localhost:8000/product/${id}`);

        dispatch({type : actionType.ADD_TO_CART,payload: {...data,quantity}})
    }
    catch(err){
        dispatch({type : actionType.ADD_TO_CART_ERROR,payload: err.message})
    }
};

export const updatequantity = (id,change)=> async(dispatch)=>{
    console.log('Dispatching updateQuantity action:', { id, change });
        dispatch({type : actionType.UPDATE_QUANTITY_TO_CART,
            payload: {id,change}
        })

};

export const removeFromCart = (id) => (dispatch) => {
    dispatch({
        type: actionType.REMOVE_FROM_CART,
        payload: id
    })
}

export const checkOut = (cart)=> async(dispatch)=>{
    dispatch({
      type : actionType.CHECKOUT_FROM_CART,
      payload: cart
  })
  }
  
  export const checkoutFromProduct=(product)=> async(dispatch)=>{
      dispatch({
          type : actionType.CHECKOUT_FROM_PRODUCT,
          payload: product
      })
  }
 