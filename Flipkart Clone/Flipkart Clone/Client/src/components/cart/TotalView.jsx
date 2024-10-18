
import { Box,styled, Typography } from "@mui/material";
import { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';

const Wrapper = styled(Box)({
    border: '1px solid',
    borderColor: '#9e9e9e',
    background: '#ffffff',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 100%)',
    marginRight: 10
})

const Heading = styled(Box)`
    font-weight: 600px;
    color: #9e9e9e;
    border-bottom: 1px solid #878787;
    padding: 10px 20px
`
const Text = styled(Typography)`
    padding: 10px 20px;
    display: flex;

`
const PriceText= styled(Box)`
   margin-left: auto;
   display: flex;
   flex-direction: column;
`
const TotalPrice = styled(Box)`
    display: flex;
    padding: 10px 20px;
    font-size: 18px;
    font-weight: bold;
    line-height: 25px;
    border-top: 1px solid #e0e0e0;
`

const Price= styled(Typography)`
    border-top: 1px 100% solid #e0e0e0;
    padding: 15px 20px;
    margin: 20px 0;
    align-text: center;
   color: green;
`
const TotalBalance =({ cartItems }) =>{

    const [price, setPrice] = useState(0);

    const [discount, setDiscount] = useState(0)

    const location= useLocation();
    useEffect(() => {
        totalAmount();
    }, [cartItems]);

    const totalAmount = () =>{
        let price = 0, discount = 0;

        cartItems && cartItems.map(item => {
            price +=item.quantity* item.price.mrp
            discount += (item.quantity*item.price.mrp - item.quantity*item.price.cost) 
        })

        setPrice(price);
        setDiscount(discount);
    }

    return(
        
        <Wrapper>
            
           <Heading>
                <Typography>PRICE DETAILS</Typography>            
            </Heading>
                     <Box>
                    <Text >Price ({ cartItems?.length} item) 
                            <PriceText component='span'>₹{price}</PriceText>
                        </Text>   
                        <Text>Discount 
                            <PriceText component='span' >-₹{discount}</PriceText>
                        </Text> 
                        <Text>Delivery Charges
                            <PriceText component='span'>₹40</PriceText>
                        </Text>
                        <TotalPrice>Total Amount
                            <PriceText component='span'>₹{price-discount+ 40}</PriceText>    
                        </TotalPrice>   
                        <Price component='span' >You will save ₹{discount - 40} on this order</Price> 
                     </Box>
           
        </Wrapper>
    )
}
export default TotalBalance;