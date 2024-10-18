import { useState } from "react";

import { authenticPinCode } from '../../service/api';

import { Box, Dialog, TextField, Typography,Button, styled } from "@mui/material";

const Wrapper = styled(Box)`
    height: 300px;
    width: 350px;
    padding: 10px 10px
`
const PinInput= styled(TextField)({
    fontWeight: 400,
    border: 'solid',
    backgroundColor: 'rgb(255, 255, 255)',
    borderColor: 'rgb(255, 255, 255)',

    
})

const PinCheck = styled(Button)`
    align-item: center;
    font-weight: 600;
    text-transform: none;
    height: 10%;
    color:#ffffff;
    background: #9e9e9e;
    margin-top: 2%;
    margin-left: auto;
    cursor: not-allowed;
    &:hover{
        background: #9e9e9e;
    }

`
const TypeCheck = styled(Button)`
    align-item: center;
    font-weight: 600;
    text-transform: none;
    height: 10%;
    color:#ffffff;
    background: #2847fe;
    margin-top: 2%;
    margin-left: auto;
    cursor: pointer;
    &:hover{
        background: #2847f0;
    }
`
const Error = styled(Typography)`
    font-size:12px;
    line-hight: 0;
    font-weight:600;
    color: #ff6161;
    
`
const Success = styled(Typography)`
    font-size:12px;
    line-hight: 0;
    font-weight:600;
    color: Green;
    margin-left: 20px;
`
const PinCodeInitialValues = {
    Pincode :''
}

const PinCodeDialog = ({ open, setOpen }) =>{
    const [PinCode,setPinCode]=useState(PinCodeInitialValues);
    const[error,showError]=useState('');
    
    const onValueChange=(e)=>{
        setPinCode({...PinCode,[e.target.name]: e.target.value})
        showError(' ');
    }
    const handleClose = () =>{
        setOpen(false);
        setPinCode(' ');
     }

    const pinCode =async()=>{   
       let response= await authenticPinCode(PinCode);
       console.log(response.status)
       if (response.status === 200) {
        showError(false)
        handleClose()
        
      }
       else if (!PinCode){
        showError('Null')
       }
       else{
        showError(true)
       }
   }
   
    
     const warrantydate= new Date(new Date().getTime()+(7*24*60*60*1000));
      
    return(
        <Dialog open={open} onClose={handleClose} PaperProps={{sx: {maxwidth:'unset'}}}>
            <Wrapper>
            <Typography style={{fontWeight: 600, padding :'10px 0px', fontSize: 16}}>Select Delivery Address</Typography>
            <Box style={{marginTop: 10, borderBottom: '1px solid rgb(200 200 200)'}}>
            <Typography style={{marginLeft: 90, color: '#9e9e9e', marginTop: '5%'}}>Log in to view saved address</Typography>
            <img src = 'https://rukminim1.flixcart.com/www/70/70/promos/19/07/2018/1440bd92-02eb-4cb8-855b-eec545ff2e02.png?q=90' alt ='log' />
            
            </Box>
            <Typography style={{padding: '10px 0px',fontWeight: 600,fontSize: 16, marginTop: '5%'}}>Use pincode to check delivery info</Typography>
            <Box style={{display: 'flex'}}>
                       
                <PinInput  variant='standard' label='Enter Pin Code' inputProps={{ maxLength: 6 }} onChange={(e)=>onValueChange(e)} name='Pincode' value={PinCode.Pincode}/>  
                 {
                    PinCode.length !==6?
                    <PinCheck variant='span' type='submit' >Submit</PinCheck>
                    :
                    <TypeCheck variant='span' type='submit' onClick={()=> pinCode()}>Submit</TypeCheck>
                 }
                   
            </Box>
                {error ===true &&<Error>Enter a Valid Pin Code </Error>} 
                {error === 'null' && <Error>{error}</Error>}
                {error=== false &&<Success>{}</Success>}
            </Wrapper>
        </Dialog>
    )
}

export default PinCodeDialog;