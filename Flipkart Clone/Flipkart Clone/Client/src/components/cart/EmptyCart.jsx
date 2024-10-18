import { useState, useContext }  from 'react';

import { Typography, Box,Button, styled } from '@mui/material';

import LoginDialog from '../login/loginDialog';
import { LoginContext } from '../../context/dataprovider';

const Component = styled(Box)`
    width: 98%;
    height: auto;
    padding: 20px 10px;
    align-items: center;
`;

const Container = styled(Box)`
    align-items: center;
    background: #fff;
    padding: 30px 0 36px ;
    display: flex;
    flex-direction: column;
`;

const Image = styled('img')({
    width: '15%',
    alignItems: 'center'
});

const MissingText = styled('Typography')`
    font-size: 16px;
    margin-top: 2%;
`

const LoginButton= styled(Button) ({
    alignItems: 'center',
    textTransform: 'none',
    color:'#fff',
    background: '#FB6418',
    width: '15%',
    margin: '2% ',
    borderRadius:'4%',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 20%)',
    '&:hover': {
        color: '#FFFFFF',
        background: '#FB6418'
    }
})

const EmptyCart = () => {
    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
    
    const[open, setOpen ] = useState(false);

    const {account, setAccount} = useContext(LoginContext);

    const openDialog = () =>{
        setOpen(true);
    }
    return (       
        <Component>
            <Container>
                <Image src={imgurl} />
                <MissingText>Missing Cart Items?</MissingText>
                <Typography component="span" style={{marginTop: 10, fontSize: 12}}>Add items to it now.</Typography>
                <LoginButton variant="contained"  onClick={()=> openDialog()} style={{ marginRight : '35px'}} >
                      Login
                </LoginButton>
            </Container>
            <LoginDialog open ={open} setOpen={setOpen}/>
        </Component>
    )
}

export default EmptyCart;