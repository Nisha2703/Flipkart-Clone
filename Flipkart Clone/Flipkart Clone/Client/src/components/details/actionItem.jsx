
import {useState,useEffect} from 'react';

import {Box, Button, styled} from '@mui/material'
import {ShoppingCart, FlashOn} from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart} from '../../redux/actions/cartActions'
import {  checkoutFromProduct } from '../../redux/actions/cartActions';

const LeftContainer = styled(Box)`
    min-width: 40%;
    align-items: center;
    justify-content: center;
    padding: 0 0 0 10px;
    
`;

const Store = styled('img')({
    width: '80%',
     
})


const StyledButton= styled(Button)`
    
    width: 48%;
    height: 50px
`
const ActionItem =({product})=>{

    const { id } = product;
    const { quantity } = product;

    const navigate = useNavigate();
    const dispatch = useDispatch();

       

    const addItemToCart = () =>{
        dispatch(addToCart(id,quantity));
        navigate('/cart')
    }

    const checkoutFromProductpage = () =>{
        dispatch( checkoutFromProduct(product));
        navigate('/checkout')
    }

    return(
        <LeftContainer>
            <Box style={{ padding: '10px 0 0 40px',border : '1px solid #f0f0f0'}}>
                 <Store src={product.url.detailUrl} alt='product'/>
            </Box>
            <Box style={{marginTop:'5%'}}>
            <StyledButton variant='contained' onClick={() => addItemToCart()} style={{marginRight: 10, background: '#ff9f00'}}><ShoppingCart/>Add to Cart</StyledButton>
            <StyledButton variant='contained' onClick={()=>checkoutFromProductpage()}style={{background: '#fb641b'}}><FlashOn/>Buy Now</StyledButton>
            </Box>
        </LeftContainer>
    )
}
export default ActionItem;