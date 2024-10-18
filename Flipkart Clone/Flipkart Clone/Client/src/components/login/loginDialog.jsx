import{useState, useContext} from 'react';
import { Dialog , Box, TextField, Button,styled, Typography} from '@mui/material';

import { authenticatesignUp, authenticateLogin } from '../../service/api.js';
import { LoginContext} from '../../context/dataprovider.jsx'
const Component = styled(Box)`
    height: 100vh;
    width: 90vh;
`
 const Image= styled(Box)`
    background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85%  no-repeat  ; 
    height: 100%;
    width : 80%;
    color: white;
    padding: 0 35px;
    
`
const Container = styled(Box)`
    height: 80vh;
    width: 100vh;
    padding: 20px 20px;
    text-align: center;
    & > div, & > button, & > p{
    margin-top:20px;
    }
`
const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB6418;
    color:#ffffff;
    border-radius:4%;
    width: 80%;
    
`
const OTPButton = styled(Button)`
    text-transform: none;
    color:#2874f0;
    border-radius:4%;
    width: 80%;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 20%)
`
const Text = styled(Typography)`
    font-size:55%;
    color:#878787;
`
const CreateAccount= styled(Typography)`
    font-size:14px;
    font-weight:600;
    cursor:pointer;
    color: #2874f0;
    padding: 65px 0
`
const Error = styled(Typography)`
    font-size:10px;
    line-hight: 0;
    margin- top: 10px;
    font-weight:600;
    color: #ff6161;
`
const accountInitialValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here",
        subHeading: 'Signup to get started'
    }
}
const signupinitialvalues={
    firstname:"",
    lastname:"",
    username:"",
    email:"",
    password:"",
    phone:""
}
const loginInitialvalues={
    username: " ",
    password: " ",
}

const LoginDialog = ( {open, setOpen} )=>{
    const[account, toggleAccount] = useState(accountInitialValues.login)
    const[signup, setSignup]= useState(signupinitialvalues)
    const[login, setLogin]=useState(loginInitialvalues);
    const[ error,showError] = useState('');
    const {setAccount} = useContext(LoginContext);

    const handleClose =()=>{
        setOpen(false);
        toggleAccount(accountInitialValues.login);
        
    }
    const onValueChange=(e)=>{
        setLogin({...login,[e.target.name]: e.target.value})
        showError('')
    }
    const onInputChange=(e)=>{
        setSignup({...signup,[e.target.name]: e.target.value})
    }
    const loginUser = async() => {
        let response = await authenticateLogin(login);
        if(response.status === 200) {
            
             handleClose();
             showError(false);
             setAccount(login.username);}
        else {
            showError(true);
        }
       
    }

    const signupUser = async() => {
        let response = await authenticatesignUp(signup);
        if(!response) return;
        handleClose();
        setAccount(signup.username);
    }
    
    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup);
    }
   

    return(
        <Dialog open={open} onClose={handleClose} PaperProps={{sx: {maxwidth:'unset'}}}>
            <Component style={{ display: 'flex'}} >
                <Image>
                    <Typography variant="h5" style={{marginTop: 30, fontWeight: 600}}>{account.heading}</Typography>
                    <Typography style={{marginTop: 20, fontWeight: 600, fontSize: 12}}>{account.subHeading}</Typography>
                </Image>
                {
                    account.view === 'login' ?
                    <Container>
                        <TextField variant='standard' onChange={(e)=>onValueChange(e)} name= 'username' label='Enter Username'/>

                        { error && <Error >Please enter valid username or paasword</Error>} 

                        <TextField variant='standard'onChange={(e)=>onValueChange(e)} name= 'password' label='Enter Password'/>
                        <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy. </Text>
                    
                        <LoginButton onClick={()=>loginUser()}>Login</LoginButton>
                      
                        <Typography>OR</Typography>
                        <OTPButton >Request OTP</OTPButton>
                        <CreateAccount onClick={()=>toggleSignup()}>New to Flipkart? Create an Account</CreateAccount>
                    </Container>
                    :
                    <Container >
                        <TextField variant='standard' onChange={(e)=>onInputChange(e)} name= 'firstname' label='Enter First-Name'/>
                        <TextField variant='standard'  onChange={(e)=>onInputChange(e)} name= 'lastname' label='Enter Last_name'/>
                        <TextField variant='standard'  onChange={(e)=>onInputChange(e)} name= 'username' label='Enter UserName'/>
                        <TextField variant='standard'  onChange={(e)=>onInputChange(e)} name= 'email' label='Enter E-Mail'/>
                        <TextField variant='standard'  onChange={(e)=>onInputChange(e)} name= 'password' label='Enter Password'/>
                        <TextField variant='standard'  onChange={(e)=>onInputChange(e)} name= 'phone' label='Enter Phone'/>
                        <LoginButton onClick={() => signupUser() } >Continue</LoginButton>             
                    </Container>
                }
            </Component>
           
        </Dialog>
    )
}

export default LoginDialog;