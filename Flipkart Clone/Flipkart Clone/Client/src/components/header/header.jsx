import { useState } from 'react';
import{AppBar,Toolbar,Box,Typography,IconButton,Drawer,List,Grid,styled} from '@mui/material';

import { Menu } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Search from './search';
import Custombuttons from './customButtons';

const Styledheader= styled(AppBar)`
   diplay:flex;
   height:10%;
   background: #2874f0;
   
`
const Component= styled(Link)`
   margin-left:12%
`
const Subheading= styled(Typography)
`
   display: flex;
   color:#f1faee;
   font-size:80%;
   margin-down:2%;
   font-style:italic;
`

const Plusimage =styled('img')({
  width:12,
  height:12,
  marginLeft: '5%',
  marginTop: '4%'
})

const MenuButton = styled(IconButton)(({ theme }) => ({
   display: 'none',
   [theme.breakpoints.down('sm')]: {
       display: 'block'
   }
}));

const CustomButtonWrapper= styled(Box)(({ theme }) => ({ 
   margin: '0 0 0 auto', 
   [theme.breakpoints.down('sm')]: {
       display: 'none'
   }
}));

const Header=()=>
{
    const suburl='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    const logoHeader='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';  

    const [open, setOpen] = useState(false);
    const location= useLocation();
    const isCheckoutPage = location.pathname === '/checkout'
    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const list = () => (
        <Box style={{ width: 'auto' }} onClick={handleClose}>
            <List>
                <listItem >
                    <Custombuttons />&nbsp;&nbsp;&nbsp;
                </listItem>
            </List>
        </Box>
    );
    return(
        
       <Styledheader lg={12} sm={12} md={12} xs={12} container ='true'>
        <Toolbar>
            { isCheckoutPage ?
           <Box style= {{display: 'none'}}>
            <MenuButton color="inherit" onClick={handleOpen} >
                <Menu />
            </MenuButton>
             <Drawer open={open} onClose={handleClose}>
             {list()}
         </Drawer>
         </Box>
         :
         <Box>
            <MenuButton color="inherit" onClick={handleOpen} >
                <Menu />
            </MenuButton>
             <Drawer open={open} onClose={handleClose}>
             {list()}
         </Drawer>
         </Box>
         }       

               
        <Grid item lg={4} md={4} sm={12} xs={12} ></Grid>
            <Component to={`/`} style={{textDecoration:'none', color: 'inherit'}} >
               <img src ={logoHeader} alt='logo' style={{width: 85}} /> 
               <Box fontStyle={({ display: 'flex'})}>
                  <Subheading>Explore&nbsp;
                     <Box component="span" style={{color: '#ffe500'}}>Plus</Box> 
                     <Plusimage src={suburl} alt="sub-logo" /> 
                  </Subheading>   
               </Box>
            </Component>
            { isCheckoutPage ?
            <Box style={{ display: 'none' }}>
            <Search />
            <CustomButtonWrapper >
                <Custombuttons  />
             </CustomButtonWrapper>
             </Box>
             :
             < >
             <Search />
             <CustomButtonWrapper >
                 <Custombuttons  />
              </CustomButtonWrapper>
              </>
            }
       </Toolbar>
       </Styledheader>
       
    )
};

export default Header;