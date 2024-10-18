import { useContext,useState } from "react";

import { Accordion, AccordionDetails, AccordionSummary, Box,Button,Grid,Paper,TextField,Container,List,ListItem,Typography, styled } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


import LoginDialog from "../login/loginDialog";
import Profile from "../header/profile";
import CartItems from "../cart/cartItem";

import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import NotificationsIcon from '@mui/icons-material/Notifications';
import StarIcon from '@mui/icons-material/Star';
import DoneIcon from '@mui/icons-material/Done';


const Wrapper = styled(Box)`
   justify-content: center;
   font-family: Inter, -apple-system, Helvetica, Arial, sans-serif;
`

const Header = styled(Box)`
    padding: 10px 10px;
    justify-content: center;
    cursor: default;
    color: #FFFFFF;
    background: #2874f0;
    margin: 0 0;
`

const LeftContainer= styled(Box)`   
    padding: 25px 30px;
    align-item: center;
    justify-content:center;

`
const Number = styled(Typography)({
    background: '#fff',
    color:' #2874f0',
    fontSize: 16,
    height: '70%',
    fontWeight: 600,
    width: 20,
    border: '0px solid',
    borderRadius: '2%',
})

const LoginButton= styled(Button)({
   border: '2px solid #2874f0',
   padding:'20px 20px',
    textTransform :'none',
    marginRight: '100px',
    height: '50px',
    alignItem: 'center',
    borderRadius: 2,
    boxShadow: 'none',
    width: '40%',
    color: '#2874f0',
    background: '#FFFFFF',
    '&:hover': {
        color: '#FFFFFF',
        textTransform : 'uppercase',
        background: '#2874f0'
    }

});

const ContinueButton= styled(Button)`
    background: #FB6418;
    color:#ffffff;
    border-radius:0%;
    width: 40%;
    height: 50px;
    margin-top: 30px;
`

const AccordionHeader = styled(Typography)(({ theme, active }) => ({
  backgroundColor: active ? '#1976d2' : '#f5f5f5',
  color: active ? '#fff' : '#000',
  padding: theme.spacing(2),
  borderRadius: active ? '4px' : '0',
}));

const Details = ({account,setAccount, item}) =>{
    const[open, setOpen ] = useState(false);   

    const openDialog = () =>{
        setOpen(true);
    }  
    const [activeStep, setActiveStep] = useState(1); 
    const handleNextStep = () => {
          setActiveStep((prevStep) => prevStep + 1);
    }
    const handleChangeStep = (step) => {
        if (activeStep !== step) {
            setActiveStep(step);
          }
      };
      const isExpanded = (step) => activeStep === step;

     
      const date= new Date(new Date().getTime()+(5*24*60*60*1000));
    return(

    <Box style={{background: 'rgb(241,243,246'}}>
        <Accordion expanded={isExpanded(1)} onChange={() => handleChangeStep(1)} style={{marginBottom: 10, }}>
          
            <Header>
                <Number component="span"> 1</Number>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Typography component="span" style= {{fontWeight: 'bold'}}>LOGIN OR SIGNUP</Typography>
              </Header>
       
        <AccordionDetails>
            {
            account?
            <Box style={{padding: '0 35px', marginTop: -20}}>
                <Profile disabled account ={account} setAccount={setAccount}>
                    <Button></Button> 
                </Profile>
                <ContinueButton style={{marginBottom: 15}} onClick={handleNextStep}>Continue Checkout</ContinueButton>
            </Box>
             :
             <Box>
                <LeftContainer >
                <LoginButton variant="contained" onClick={()=> openDialog()} >
                    Login
                </LoginButton><br/>
                    </LeftContainer>
                    <Box style={{dispaly: 'flex', marginTop: -130}}>
                <List style= {{marginLeft: '50%', padding:'-20px 0',dispaly: 'flex', gap:2,}}>
                    <ListItem style={{color: '#9e9e9e',fontSize: 14}}>Advantages of secure login</ListItem>
                    <ListItem style={{fontSize: 14}}>
                        <LocalShippingIcon style={{color: '#2874f0', marginTop:5}}/>&nbsp;&nbsp;&nbsp;
                    Easy TRack Orders, Hussle Free Returns </ListItem>
                    <ListItem style={{fontSize: 14}}>
                        <NotificationsIcon style={{color: '#2874f0'}}/>&nbsp;&nbsp;&nbsp;
                        Get Relevant Alerts and Recmmendation</ListItem>
                    <ListItem style={{fontSize: 14}}>
                        <StarIcon style={{color: '#2874f0'}}/>&nbsp;&nbsp;&nbsp;
                        Wishlist, Reviews, Ratings and more.</ListItem>
                </List>
                </Box>
                <LoginDialog open ={open} setOpen={setOpen}/>
          </Box>
            }
        </AccordionDetails>
        </Accordion>
  
            {/* Step 2: Delivery Address */}
              <Accordion expanded={activeStep === 2} onChange={() => handleChangeStep(2)} style={{marginBottom: 10}}>
                <AccordionSummary >
                  
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Delivery Address Form...</Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNextStep}
                    sx={{ marginTop: 2 }}
                  >
                    Next
                  </Button>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={isExpanded(3)} onChange={() => handleChangeStep(3)} style={{marginBottom: 10}}>
              <Box style={{display: "flex"}}>
                <Header style= {{background: '#fff'}}>
                <Number component="span">3</Number>&nbsp;&nbsp;&nbsp;&nbsp;
                <Typography  component="span" style={{color: '#9e9e9e',fontSize: 14}}>ORDER SUMMARY</Typography>&nbsp;&nbsp;
                <DoneIcon style={{color: '#2847f0', fontSize: 14, fontWeight: 600}}/>
                </Header>
                <Button onClick={handleChangeStep}>Change</Button>
              </Box>
               
                <AccordionDetails>
                  <AccordionSummary>
                  <Box style={{display: "flex", marginTop: 10}}>
                  <CartItems item={item} />
                  <Typography style={{  fontSize: 14, padding: '30px 20px'}}>Delivery by {date.toDateString()}</Typography>
                  </Box>
                  <ContinueButton style={{marginTop: 10,width: '15%', marginLeft: '80%'}} onClick={handleNextStep}>Continue </ContinueButton>
                  </AccordionSummary>
                </AccordionDetails>
              </Accordion>
          
              <Accordion expanded={activeStep === 4} style={{marginBottom: 10}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6">4. PAYMENT OPTIONS</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>Payment Options...</Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNextStep}
                    sx={{ marginTop: 2 }}
                  >
                    Complete Purchase
                  </Button>
                </AccordionDetails>
              </Accordion>
           
          </Box>

    
    
)};

export default Details;