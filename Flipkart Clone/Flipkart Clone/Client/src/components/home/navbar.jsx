
import {Box,Grid, styled, Typography} from '@mui/material';
import { navData } from '../../Constants/Data';

const Navigation = styled(Grid)`
    display : flex;
    margin-top: 5%;
    background: #2874f0;
    justify-content: space-between;
`

const Container = styled(Grid)`
    padding:12px 8px;
    text-align: center;
    

`
const Text= styled(Typography)`
    font-size: 14px;
    font-weight:600;
    font-family: inherit;
    color: #FFFFFF;
`

const Navbar = ()=>{
    return( 
        <Navigation lg={12} sm={12} md={12} xs={12} container>
            
          {
            
                navData.map(temp => (
                    <Container>
                        <Grid item lg={4} md={4} sm={12} xs={12} ></Grid>
                        <img src={temp.url} style={{  width: 64 }} />
                        <Text>{temp.text}</Text>
                    </Container>
                ))
            
            }
            
        </Navigation>
    )
}

export default Navbar;