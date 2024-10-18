import { useSelector } from "react-redux";
import { useContext } from "react";

import { Box,Grid,styled } from "@mui/material";
import GppGoodIcon from '@mui/icons-material/GppGood';
import Details from "./userDetails";

import { LoginContext } from '../../context/dataprovider';
import TotalBalance from "../cart/TotalView";


const Container = styled(Box)`
    display: flex;      
`
const LeftContainer = styled(Grid)({
  padding: '0 0',
  marginTop: 10,
  marginLeft:10,
  width: '65%',
  background: '#fff',
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


const Checkout = () => {
 
  const { cartItems } = useSelector (state => state.cart);
  const {account, setAccount} = useContext(LoginContext);
 
  
  return (
    <Box style={{background: '#f1f3f6', height: 'auto', width: '100%'}}>
      <Container container>
      <LeftContainer item lg={9} md={9} sm={12} xs={12}>
      {
        cartItems.map(item => (
          <Details account={account} setAccount={setAccount} item={item} />
        ))}
        </LeftContainer>
      <RightContainer item lg={3} md={3} sm={12} xs={12}>
        { account ? 
        <>
        <TotalBalance  cartItems={cartItems}/>
          <Pay >
              <GppGoodIcon style= {{height: 80, width: 40, marginTop: '-20px'}}/>
               Safe and Secure Payments.Easy returns.100% Authentic products.  
            </Pay>
            </>
            :
            <Pay >
            <GppGoodIcon style= {{height: 80, width: 40, marginTop: '-20px'}}/>
             Safe and Secure Payments.Easy returns.100% Authentic products.  
          </Pay>
         }
      </RightContainer>
   </Container>
   </Box>
  );
};

export default Checkout;
