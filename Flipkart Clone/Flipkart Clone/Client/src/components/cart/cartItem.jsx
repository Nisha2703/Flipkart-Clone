
import { removeFromCart } from '../../redux/actions/cartActions';
import { useDispatch } from "react-redux";
import React, { useState } from "react";

import { Box, Button, Typography , styled} from "@mui/material";
import { addEllipsis} from "../../utils/common-utils";


import Buttongroup from "./ButtonGroup";

const Component = styled(Box)`
    border-top: 1px solid #9e9e9e;
    display: flex;
    backgound: white;
    
    
`
const Image = styled(Box)`
   margin-left: 20px;
   display: flex;
   flex-direction: column;
   margin-top: 5%;
`
const SmallText = styled(Typography)`
    color: #878787;
    font-size:14px;
    margin-top: 10px
`
const Remove= styled(Button)({
    marginTop:25,
    fontSize: 16,
    color: '#000',
    background: '#ffffff',
    fontWeight: 600,
    '&:hover ':{
    color: '#2874f0',
    background: '#ffffff'
    }
})
const CartItems =({item}) =>{
    const dispatch = useDispatch();

    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id));
       }
    

    return(
        <Component>
            <Image>
                <img src = {item.url.shortUrl} alt='product' style={{height: 150, width: 150}} />
               
                    <Buttongroup item={item} key={item.id} />
                   
            </Image>
            <Box style={{marginLeft: 10, marginTop: '5%'}}>
                <Typography>{addEllipsis(item.title.longTitle)}</Typography>
                <SmallText display='flex'>Seller: RetailNet
                <Box component='span'><img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png' 
                style={{width: 77, marginLeft: 20}}/>
                </Box></SmallText>
                <Typography style={{margin: '20px 0'}}>
                <Box component= 'span'  style={{fontWeight: 600, fontSize: 18}}>₹ {item.quantity*item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component= 'span' style ={{color: '#878787'}}><strike>₹{item.quantity*item.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component= 'span' style ={{color: '#388E3C'}}>{item.price.discount}</Box>
                </Typography>
                <Remove onClick={() =>{removeItemFromCart(item.id)}}>Remove</Remove>
                
            </Box>
        </Component>
    )
}
export default CartItems;