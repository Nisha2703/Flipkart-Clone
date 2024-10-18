
import axios from 'axios';
import { useSelector } from 'react-redux';

import * as actionType from '../constants/productconstants.js';

export const getProducts = () =>async (dispatch) =>{
    try{
        const {data}=await axios.get(`http://localhost:8000/products`);
        
        dispatch({ type: actionType.GET_PRODUCT_SUCCESS, payload: data})       

    }
    catch(err){
       dispatch({type: actionType.GET_PRODUCT_FAIL, payload: err.message})
    }
}


export const getProductDetails = (id) =>async(dispatch) =>{
    try{
        dispatch({type : actionType.GET_PRODUCT_DETAIL_REQUEST});
        const response = await fetch(`http://localhost:8000/product/${id}`);
        const data = await response.json();
        dispatch({
        type: actionType.GET_PRODUCT_DETAIL_SUCCESS,  
        payload: data,  
        });

    }
    catch(err){
        dispatch({type:actionType.GET_PRODUCT_DETAIL_FAIL, payload:err.response})
    }

}

