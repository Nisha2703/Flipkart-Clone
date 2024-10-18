
import {Grid, styled} from '@mui/material';

const imageURL = [
    'https://rukminim2.flixcart.com/fk-p-flap/520/280/image/c2c730c7d61ec8d1.jpg?q=20',
    'https://rukminim2.flixcart.com/fk-p-flap/520/280/image/008d2603e4a6b790.jpg?q=20',
    'https://rukminim2.flixcart.com/fk-p-flap/520/280/image/aac9807a8bd3a051.jpg?q=20'   
];

const Wrapper = styled(Grid)`
    margin-top: 10px;
    display: flex;
   
`
const Image=styled('img')(({theme}) => ({
    marginTop: '10px',
    width: '100%',
    height: 200,
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]:{
        objectFit: 'cover',
        height: 180
    }
}));
const MidBanner =() =>{
    return(
        <>
            <Wrapper lg={12} sm={12} md={12} xs={12} container>
                {
                imageURL.map(image =>(
                    <Grid item lg={4} md={4} sm={12} xs={12} >
                    <img  src={image} alt='banner' style={{width:'98%', objectFit: 'cover'}}/>
                    </Grid>
                ))
                }
            
            </Wrapper>
            <Image src='https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/799c521a141bb4c7.png?q=20'
             alt='image' />
        </>
    )
}

export default MidBanner;