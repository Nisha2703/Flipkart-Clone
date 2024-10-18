import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { updatequantity } from "../../redux/actions/cartActions";
import {Box, Button,Dialog,Slide, styled, Typography} from "@mui/material"

const Component= styled(Box)`
    margin: 20px 0;    
    display: flex;
    flex-direction: row;
    gap: 5%;
    font-weight:bold;
    justify-content:center
`
const StyledButton = styled(Button)`
    border: 1px solid #878787;
    color: black;
    min-width: 0;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    
`
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const Buttongroup = ({item}) =>{
   
    const [open, setOpen] = useState('');


    const dispatch = useDispatch();
   const handleIncrement = ()=>{
        dispatch(updatequantity(item.id,1));
        console.log(item.id,item.quantity)
        setOpen(true);
        setTimeout(() => {
            setOpen(false);
          }, 3000);
        
       }
       const handleDecrement = ()=>{
        dispatch(updatequantity(item.id,-1));
        console.log(item.id,item.quantity)
        setOpen(true);
        setTimeout(() => {
            setOpen(false);
          }, 3000);
        
       }



    const handleClose = () => {
        setOpen(false);
      };
   
    return (
       <Component>
            {
            item.quantity===1?
            <StyledButton disabled onClick={() =>{handleDecrement()}}>-</StyledButton>
            :
            <StyledButton onClick={() =>{handleDecrement()}}>-
            <Dialog onClose={handleClose} open={open}
            TransitionComponent={Transition} 
            transitionDuration={{ enter: 500, exit: 300 }}>
                <Typography> You changed '{item.title.longTitle}' QUANTITY to {item.quantity}</Typography>
            </Dialog></StyledButton>
            }
           
            <span style = {{color: 'black', border: '1px solid #878787',borderRadius: 0, height:28, width: 40, minWidth: 0, textAlign: 'center'}}>{item.quantity}</span>
            <StyledButton onClick={() =>handleIncrement()} >
                <Dialog  open={open}
                 TransitionComponent={Transition} 
                 transitionDuration={{ enter: 500, exit: 300 }}
                 onClose={handleClose}
                 aria-describedby="alert-dialog-slide-description">
                     <Typography style={{backgroundColor: 'black', color: '#fff', height: 'auto', padding: '20px 10px'}}> You changed '{item.title.longTitle}' QUANTITY to {item.quantity}</Typography>
                 </Dialog>
                 
            + </StyledButton>
        </Component>
      
    );
}


export default Buttongroup;