import { useState, useContext }  from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

import{Badge, Box,Button, Typography,styled} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import LoginDialog from '../login/loginDialog';
import Profile from './profile';
import { LoginContext } from '../../context/dataprovider';

const  Wrapper= styled(Box)(({ theme }) => ({
    display: 'flex',
    alignText: 'center',
    gap: '15px',
    [theme.breakpoints.down('sm')]: {
        color: '#2874f0',
        lineHeight: 5,
        display: 'flex',
        flexDirection: 'column',
        marginTop: 10,
        marginLeft: '20%'
        }
    
 }));
 

const Container =styled(Link)`
    display: flex;
    color: inherit;
    text-decoration:none;
    
`

const Text = styled(Typography)`
    font-size: 14px;
    textDecoration: none;
    align-item: center;
    justify-content: space-between;
    margin-right: 30px;
`
const LoginButton= styled(Button)(({ theme }) => ({
   
    textTransform :'none',
    marginRight: '100px',
    height: '32px',
    alignItem: 'center',
    borderRadius: 2,
    boxShadow: 'none',
    width: '35%',
    color: '#2874f0',
    background: '#FFFFFF',
    '&:hover': {
        color: '#FFFFFF',
        textTransform : 'uppercase',
        background: '#2874f0'
    },

    [theme.breakpoints.down('sm')]: {
        background: '#2874f0',
        color: '#FFFFFF'
    }
}));

const Custombuttons = ()=>{

    const[open, setOpen ] = useState(false);

    const {account, setAccount} = useContext(LoginContext);

    const { cartItems} = useSelector (state => state.cart)

    const openDialog = () =>{
        setOpen(true);
    }
    return(
    <Wrapper>
        {
            account ? <Profile style={{ marginRight : 50}} account ={account} setAccount={setAccount} />
            :
            <LoginButton variant="contained"  onClick={()=> openDialog()} style={{ marginRight : '35px'}} >
            Login
            </LoginButton>
        }
        <Text style={{ marginTop: 3, width: 155}}>Become a Seller</Text>
        <Text style={{ marginTop: 3 }}>More</Text>

        <Container to= '/cart'>
        { cartItems.length ?
           <Badge badgeContent= {cartItems.length} color='secondary' >
                <ShoppingCartIcon />
            </Badge>
            :
                <ShoppingCartIcon />
        }
            <Text style={{ marginTop: 3 }}>Cart</Text>
            
        </Container>
        <LoginDialog open ={open} setOpen={setOpen}/>
    </Wrapper>
    )
}

export default Custombuttons;