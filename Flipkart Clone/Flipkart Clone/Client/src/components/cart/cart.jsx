import {useSelector} from 'react-redux';
import { useEffect, useState} from 'react';

import CartItems from './cartItem';
import TotalBalance from './TotalView';
import { authenticPinCode } from '../../service/api';

import {Box, Grid,Button, Typography,styled} from '@mui/material';
import GppGoodIcon from '@mui/icons-material/GppGood';
import PinCodeDialog from '../pinCode/pinCodeDialog';
import Pincode from './PincodeSetting';
import EmptyCart from './EmptyCart';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { checkOut } from '../../redux/actions/cartActions';


const Wrapper = styled(Box)`
   justify-content: center;
   font-family: Inter, -apple-system, Helvetica, Arial, sans-serif;
`

const Container = styled(Box)`
    display: flex;      
`
const Header = styled(Box)`
    padding: 10px 10px;
    color: #FFFFFF;
    background: #2874f0;
    display: flex;
    text-align: center;
`

const LeftContainer = styled(Grid)({
    padding: '0 0',
    marginTop: 10,
    border: '1px solid',
    borderColor: 'grey',
    marginLeft:10,
    width: '65%',
    background: '#fff',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 100%)',
})

const RightContainer = styled(Grid)({
    padding: '0 0',
    position: 'fixed',
    marginLeft: '68%',
    marginTop: 10,
    width: '30%',
    height: '50%',
    
})

const Pay = styled('Typography')({
    marginTop: '10%',
    display: 'block',
    marginRight: '5%',
    display: 'flex',
    flexDirection: 'row',
    gap : 3,
    color: '#9e9e9e',
    fontWeight: 600,
    
})

const PincodeButton = styled(Button)({
    textTransform: 'none',
    height: 30,
    marginLeft: 'auto',
    alignItems: 'center',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 20%)',
    color: '#2874f0',
    background: '#FFFFFF',
    '&:hover': {
        color: '#FFFFFF',
        textTransform : 'uppercase',
        background: '#2874f0'
    }   
})
const Success = styled(Typography)`
    font-size:12px;
    line-hight: 0;
    font-weight:600;
    color: Green;
    margin-left: 20px;
`
const PlaceWrapper = styled(Box)`
    position: sticky;
    padding: 16px 22px;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 50%);
   
`
const PlaceButton =styled(Button)`
    margin-left :70%;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    color: #fff;
    background: #fb641b;
    width: 30%;
    dispaly: flex;
    height: 51px;
    border-radius: 2px;
`
const Cart = ({ item }) =>{
    const [PinCode,setPinCode]=useState('');
    const[open, setOpen ] = useState(false);
    const { cartItems} = useSelector (state => state.cart)
    const [error, showError] = useState('');
    

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const CheckoutFromCart = () =>{
        dispatch(checkOut(cartItems));
        navigate('/checkout')
    }

   const openDialog = () =>{
        setOpen(true);
   }

   const pinCode =async()=>{   
    let response= await authenticPinCode(PinCode);
    console.log(response.status)
    if (response.status === 200) {
     showError(false)
     
   }}

   const date= new Date(new Date().getTime()+(5*24*60*60*1000));

    return(
        <Box style={{background: '#f1f3f6', height: 'auto', width: '100%'}}>
        { cartItems.length ?
        <Wrapper>
            <Container container>
                <LeftContainer item lg={9} md={9} sm={12} xs={12}>
                    <Header>
                        <Typography>My Cart ({cartItems.length})</Typography>
                        { error=== false ?
                        <Pincode><Success>Delivery by {date.toDateString()}</Success></Pincode>
                        :
                        <PincodeButton onClick = {() => openDialog()} >Pincode</PincodeButton>
                        }
                    </Header>
                   
                    {
                        cartItems.map(item => (
                        
                            <CartItems item ={item} key={item.id}  />
            
                        ))
                    }
                   
                    <PlaceWrapper>
                        <PlaceButton onClick={()=>CheckoutFromCart()}>Place Order</PlaceButton>
                    </PlaceWrapper>
                 </LeftContainer>
                 <RightContainer item lg={3} md={3} sm={12} xs={12}>
                      
                    <TotalBalance cartItems={cartItems} key={cartItems.id}/>
                
                <Pay >
                    <GppGoodIcon style= {{height: 80, width: 40, marginTop: '-20px'}}/>
                    Safe and Secure Payments.Easy returns.100% Authentic products.  
                </Pay>
                </RightContainer>
            </Container>
            <PinCodeDialog open ={open} setOpen={setOpen} />
        </Wrapper>
        :
            <EmptyCart />
         }
        </Box>
    )
}

export default Cart;