import { useState } from 'react';

import { LocalOffer } from '@mui/icons-material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import {Table,TableBody,Typography,TableCell,TableRow,TextField,Button,Box ,styled} from '@mui/material'

import { authenticPinCode } from '../../service/api';

const SmallText = styled(Box)`
    
    vertical-align: baseline;
    &>p {
        font-size: 14px;
    }
`

const LocalOfferBedge = styled(LocalOffer)({
    marginRight: 10,
    color: '#00CC00',
    fontSize: 18,

})


const ColumnText = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;
    
    display: flex;
    
    & > td {
        font-size: 14px;
        margin-top: 10px;
        border: none
    }
`

const Error = styled(Typography)`
    font-size:12px;
    line-hight: 0;
    font-weight:600;
    color: #ff6161;
    margin-left: 20px;
`
const Success = styled(Typography)`
    font-size:12px;
    line-hight: 0;
    font-weight:600;
    color: Green;
    margin-left: 20px;
`
const PinInput= styled(TextField)({
    fontWeight: 400,
    border: 'solid',
    backgroundColor: 'rgb(255, 255, 255)',
    borderColor: 'rgb(255, 255, 255)',
    borderBottomColor: 'rgb(40, 116, 240)',
    '&:enter': {
        borderBottom: 'solid',
        borderBottomColor: 'none',
    }
})

const PinCheck = styled(Button)`
    align-item: center;
    font-weight: 600;
    text-transform: none;
    border: solid;
    background-color:rgb(255, 255, 255);
    border-color: rgb(255,255,255);
    border-bottom: solid;
    border-bottom-color: rgb(40,116,240);
`

const Image = styled('img')({
    width: 'auto',
    height: '100px',
    alignItems: 'center',
    padding: '10px 50px'
})
const PinCodeInitialvalues={
   Pincode:''
}


const ProductDetail =({product}) =>{
    
    const [PinCode,setPinCode]=useState(PinCodeInitialvalues);
    const[error,showError]=useState('');
   

    const onValueChange=(e)=>{
        setPinCode({...PinCode,[e.target.name]: e.target.value})
        showError('')
    }

    const pinCode =async()=>{   
       let response= await authenticPinCode(PinCode);
       console.log(response.status)
       if (response.status === 200) {
        showError(false)
       }
       else if (!PinCode){
        showError('Null')
       }
       else{
        showError(true)
       }

          
    }
    
    
    const date= new Date(new Date().getTime()+(5*24*60*60*1000));
    const warrantydate= new Date(new Date().getTime()+(7*24*60*60*1000));
    
    return(
        <>
            <Typography>{product.title.longTitle}</Typography>
                <Typography style={{marginTop: 5, color: '#878787', fontSize: 14}}>
                85 ratings & 5 reviews
                <Box component='span'>
                <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png' 
                style={{width: 77, marginLeft: 20}}/>
                </Box>
                <Typography>
                <Box component= 'span' style={{fontSize: 28, color: 'Black'}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component= 'span' style ={{color: '#878787'}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component= 'span' style ={{color: '#388E3C'}}>{product.price.discount}</Box>
                </Typography>
            </Typography>
            <Typography>
                Available Offers
            </Typography>
            <SmallText>
                <Typography><LocalOfferBedge/>Get ₹50 Instant Discount on first Flipkart UPI transaction on order of ₹200 and above T&C</Typography>
                <Typography><LocalOfferBedge/>5% Unlimited Cashback on Flipkart Axis Bank Credit Card</Typography>
                <Typography><LocalOfferBedge/>Get at flat ₹219 T&C</Typography>
                <Typography><LocalOfferBedge/>Extra ₹2000 off on HDFC Bank Debit Card EMI Txns, Tenure: 6 months and above, Min Txn Value ₹50,000 T&C</Typography>
                <Typography><LocalOfferBedge/>10% off up to ₹1,500 on IDFC FIRST Bank Credit EMI Txns on orders of ₹5,000 and above T&C</Typography>
            </SmallText>
            <Table >
                <TableBody >
                    <ColumnText >
                        <TableCell style={{color: '#878787',marginTop: 20 }}>Delivery</TableCell>
                        <TableCell  >
                            <LocationOnIcon style={{color: 'rgb(40,116,240)',marginTop: 20}} />
                            <PinInput  variant='standard' label='Enter Pin Code' inputProps={{ maxLength: 6, minLength: 6 }} onChange={(e)=>onValueChange(e)} name='Pincode' />  
                                                
                            <PinCheck variant='span' type='submit' onClick={()=> pinCode()} style={{marginBottom: 18}}>Check</PinCheck>&nbsp;&nbsp;&nbsp;
                            
                                {error ===true &&<Error>Enter a Valid Pin Code </Error>}
                                {error ===false && <Success>Delivery by {date.toDateString()}</Success> } 
                                {error === 'null' && <Error>{error}</Error>}
                             
                        </TableCell>
                        
                       
                        </ColumnText> 
                    

                    <ColumnText>        
                        <TableCell style={{fontWeight: 600}}>Delivery Charges | ₹40 </TableCell><br/>
                        <TableCell style={{color:'#878787',fontWeight: 600}}> 7 day return policy available<br/> Till {warrantydate.toDateString()} </TableCell>
                    </ColumnText>
                    <ColumnText>
                    <TableCell colSpan={2}>
                    <Image src= 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50' />
                    </TableCell>
                    </ColumnText>
                    <ColumnText>
                            <TableCell style={{color: '#878787', fontWeight: 600}}>Seller</TableCell>
                            <TableCell><span style={{ color: '#2874f0' }}>SuperComNet</span></TableCell>
                            <TableCell >View more seller starting from ₹{product.price.cost} </TableCell>
                            <TableCell style={{ fontWeight: 500}}>1 Year Warranty from the date of purchase</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color: '#878787', fontWeight: 600, marginTop:10}}>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </ColumnText>
                </TableBody>
            </Table>
        </>
    )
}
export default ProductDetail;